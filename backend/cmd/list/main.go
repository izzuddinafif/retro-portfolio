package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/izzuddinafif/retro-portfolio/backend/db"
)

func main() {
	database, err := db.InitDB()
	if err != nil {
		log.Fatal(err)
	}
	defer database.Close()

	rows, err := database.Query(`
		SELECT title, date, types, technologies
		FROM projects
		ORDER BY created_at DESC
	`)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	fmt.Println("\nCurrent Projects:")
	fmt.Println("================")
	for rows.Next() {
		var (
			title, date string
			typesJSON, techJSON []byte
			types, technologies []string
		)
		
		if err := rows.Scan(&title, &date, &typesJSON, &techJSON); err != nil {
			log.Fatal(err)
		}
		
		json.Unmarshal(typesJSON, &types)
		json.Unmarshal(techJSON, &technologies)
		
		fmt.Printf("\nTitle: %s\nDate: %s\nTypes: %v\nTechnologies: %v\n", 
			title, date, types, technologies)
	}
}
