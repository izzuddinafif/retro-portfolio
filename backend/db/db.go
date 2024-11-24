package db

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/izzuddinafif/retro-portfolio/backend/models"
)

var DB *sql.DB

func InitDB() (*sql.DB, error) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbHost, dbPort, dbUser, dbPassword, dbName)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("error connecting to the database: %v", err)
	}

	if err = db.Ping(); err != nil {
		return nil, fmt.Errorf("error pinging the database: %v", err)
	}

	DB = db
	return db, nil
}

func SetupDB() error {
	_, err := DB.Exec(`
		CREATE TABLE IF NOT EXISTS projects (
			id SERIAL PRIMARY KEY,
			title TEXT NOT NULL,
			date TEXT NOT NULL,
			description TEXT NOT NULL,
			technologies JSONB NOT NULL,
			type TEXT NOT NULL,
			link TEXT,
			doi TEXT,
			links JSONB,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`)
	return err
}

func PopulateDB() error {
	projects := []models.Project{
		{
			Title:       "Retro Portfolio",
			Date:        "2024",
			Description: "A retro-themed portfolio website built with React and Go, featuring a PostgreSQL backend.",
			Technologies: []string{"React", "TypeScript", "Go", "PostgreSQL", "Docker"},
			Type:        "Web Development",
			Link:        "https://github.com/izzuddinafif/retro-portfolio",
		},
		// Add more projects as needed
	}

	for _, project := range projects {
		techJSON, err := json.Marshal(project.Technologies)
		if err != nil {
			return fmt.Errorf("error marshaling technologies: %v", err)
		}

		linksJSON, err := json.Marshal(project.Links)
		if err != nil {
			return fmt.Errorf("error marshaling links: %v", err)
		}

		_, err = DB.Exec(`
			INSERT INTO projects (title, date, description, technologies, type, link, doi, links)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
			ON CONFLICT (id) DO NOTHING`,
			project.Title, project.Date, project.Description, techJSON, project.Type,
			project.Link, project.DOI, linksJSON)

		if err != nil {
			return fmt.Errorf("error inserting project: %v", err)
		}
	}

	return nil
}
