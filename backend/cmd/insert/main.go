package main

import (
	"encoding/json"
	"log"

	"github.com/izzuddinafif/retro-portfolio/backend/db"
)

func main() {
	database, err := db.InitDB()
	if err != nil {
		log.Fatal(err)
	}
	defer database.Close()

	project := struct {
		Title        string   `json:"title"`
		Date         string   `json:"date"`
		Description  string   `json:"description"`
		Technologies []string `json:"technologies"`
		Types        []string `json:"types"`
		Link         string   `json:"link"`
	}{
		Title:        "Hyperledger Fabric-based Zakat Management System",
		Date:         "Nov 2024",
		Description:  "Developed a Hyperledger Fabric blockchain network and implemented Zakat smart contracts in Go for managing Zakat transactions as a final project for graduation. Created comprehensive validation rules, multi-organization support (YDSF Malang, YDSF Jatim), and developed network deployment tools for testing and development environments.",
		Technologies: []string{"Go", "Hyperledger Fabric", "Blockchain", "Docker", "Smart Contracts"},
		Types:        []string{"Project", "Academic"},
		Link:         "https://github.com/izzuddinafif/fabric-zakat",
	}

	techJSON, err := json.Marshal(project.Technologies)
	if err != nil {
		log.Fatal(err)
	}

	typesJSON, err := json.Marshal(project.Types)
	if err != nil {
		log.Fatal(err)
	}

	// Reset sequence to max id + 1
	_, err = database.Exec(`SELECT setval('projects_new_id_seq', COALESCE((SELECT MAX(id) FROM projects), 0) + 1, false)`)
	if err != nil {
		log.Fatal(err)
	}

	_, err = database.Exec(`
		INSERT INTO projects (title, date, description, technologies, types, link, links)
		VALUES ($1, $2, $3, $4, $5, $6, NULL)
	`, project.Title, project.Date, project.Description, techJSON, typesJSON, project.Link)
	
	if err != nil {
		log.Fatal("Error inserting:", err)
	}

	log.Println("Project inserted successfully!")
}
