package main

import (
	"database/sql"
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
		SELECT *
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
			id int
			title, date, description string
			link, doi sql.NullString
			typesJSON, techJSON, linksJSON []byte
			types, technologies []string
			links map[string]string
			created_at string
		)
		
		if err := rows.Scan(&id, &title, &date, &description, &techJSON, &typesJSON, &link, &doi, &linksJSON, &created_at); err != nil {
			log.Fatal(err)
		}
		
		json.Unmarshal(typesJSON, &types)
		json.Unmarshal(techJSON, &technologies)
		if linksJSON != nil {
			json.Unmarshal(linksJSON, &links)
		}
		
		linkStr := ""
		if link.Valid {
			linkStr = link.String
		}
		
		doiStr := ""
		if doi.Valid {
			doiStr = doi.String
		}
		
		fmt.Printf("\nID: %d\nTitle: %s\nDate: %s\nDescription: %s\nLink: %s\nDOI: %s\nTypes: %v\nTechnologies: %v\nLinks: %v\nCreated At: %s\n", 
			id, title, date, description, linkStr, doiStr, types, technologies, links, created_at)
	}
}
