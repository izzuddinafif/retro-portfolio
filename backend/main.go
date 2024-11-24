package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

type Links struct {
	Go          string `json:"go,omitempty"`
	Python      string `json:"python,omitempty"`
	Overthewire string `json:"overthewire,omitempty"`
	Hackthebox  string `json:"hackthebox,omitempty"`
}

type Project struct {
	ID           int       `json:"id"`
	Title        string    `json:"title"`
	Date         string    `json:"date"`
	Description  string    `json:"description"`
	Technologies []string  `json:"technologies"`
	Type         string    `json:"type"`
	Link         string    `json:"link,omitempty"`
	DOI          string    `json:"doi,omitempty"`
	Links        *Links    `json:"links,omitempty"`
	CreatedAt    time.Time `json:"created_at"`
}

var db *sql.DB

func setupDB() *sql.DB {
	connStr := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)
	var err error
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db = setupDB()
	defer db.Close()

	router := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"} // Add your frontend URL here
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type"}

	router.Use(cors.New(config))

	// Routes
	api := router.Group("/api")
	{
		api.GET("/projects", getProjects)
		api.GET("/projects/:id", getProject)
		api.POST("/projects", createProject)
		api.PUT("/projects/:id", updateProject)
		api.DELETE("/projects/:id", deleteProject)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	router.Run(":" + port)
}

func getProjects(c *gin.Context) {
	rows, err := db.Query(`
		SELECT id, title, date, description, technologies::text, type, link, doi, links::text, created_at 
		FROM projects 
		ORDER BY created_at DESC
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var projects []Project
	for rows.Next() {
		var p Project
		var techJSON, linksJSON string
		err := rows.Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &p.Type, &p.Link, &p.DOI, &linksJSON, &p.CreatedAt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Parse technologies JSON
		if err := json.Unmarshal([]byte(techJSON), &p.Technologies); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing technologies: " + err.Error()})
			return
		}

		// Parse links JSON if not null
		if linksJSON != "null" {
			p.Links = &Links{}
			if err := json.Unmarshal([]byte(linksJSON), p.Links); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing links: " + err.Error()})
				return
			}
		}

		projects = append(projects, p)
	}

	c.JSON(http.StatusOK, projects)
}

func getProject(c *gin.Context) {
	id := c.Param("id")
	var p Project
	var techJSON, linksJSON string

	err := db.QueryRow(`
		SELECT id, title, date, description, technologies::text, type, link, doi, links::text, created_at 
		FROM projects 
		WHERE id = $1
	`, id).Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &p.Type, &p.Link, &p.DOI, &linksJSON, &p.CreatedAt)

	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Parse technologies JSON
	if err := json.Unmarshal([]byte(techJSON), &p.Technologies); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing technologies: " + err.Error()})
		return
	}

	// Parse links JSON if not null
	if linksJSON != "null" {
		p.Links = &Links{}
		if err := json.Unmarshal([]byte(linksJSON), p.Links); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing links: " + err.Error()})
			return
		}
	}

	c.JSON(http.StatusOK, p)
}

func createProject(c *gin.Context) {
	var p Project
	if err := c.ShouldBindJSON(&p); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var linksJSON []byte
	var err error
	if p.Links != nil {
		linksJSON, err = json.Marshal(p.Links)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	}

	err = db.QueryRow(`
		INSERT INTO projects (title, date, description, technologies, type, link, doi, links)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING id, created_at
	`, p.Title, p.Date, p.Description, p.Technologies, p.Type, p.Link, p.DOI, linksJSON).Scan(&p.ID, &p.CreatedAt)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, p)
}

func updateProject(c *gin.Context) {
	id := c.Param("id")
	var p Project
	if err := c.ShouldBindJSON(&p); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var linksJSON []byte
	var err error
	if p.Links != nil {
		linksJSON, err = json.Marshal(p.Links)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	}

	result, err := db.Exec(`
		UPDATE projects 
		SET title = $1, date = $2, description = $3, technologies = $4, type = $5, link = $6, doi = $7, links = $8
		WHERE id = $9
	`, p.Title, p.Date, p.Description, p.Technologies, p.Type, p.Link, p.DOI, linksJSON, id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	c.JSON(http.StatusOK, p)
}

func deleteProject(c *gin.Context) {
	id := c.Param("id")
	result, err := db.Exec("DELETE FROM projects WHERE id = $1", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	c.Status(http.StatusNoContent)
}
