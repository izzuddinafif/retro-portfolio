package main

import (
	"log"

	"github.com/izzuddinafif/retro-portfolio/backend/db"
)

func main() {
	database, err := db.InitDB()
	if err != nil {
		log.Fatal(err)
	}
	defer database.Close()

	if err := db.PopulateDB(); err != nil {
		log.Fatal(err)
	}

	log.Println("Database populated successfully")
}
