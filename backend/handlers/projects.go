package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/izzuddinafif/retro-portfolio/backend/db"
	"github.com/izzuddinafif/retro-portfolio/backend/models"
)

func GetProjects(c *gin.Context) {
	rows, err := db.DB.Query(`
		SELECT id, title, date, description, technologies, types, link, doi, links, created_at
		FROM projects
		ORDER BY created_at DESC
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var projects []models.Project
	for rows.Next() {
		var p models.Project
		var techJSON, typesJSON, linksJSON []byte
		var link, doi sql.NullString // Using sql.NullString for nullable fields

		err := rows.Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &typesJSON, &link, &doi, &linksJSON, &p.CreatedAt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Handle nullable strings
		if link.Valid {
			p.Link = &link.String
		}
		if doi.Valid {
			p.DOI = &doi.String
		}

		// Unmarshal JSON arrays
		if err := json.Unmarshal(techJSON, &p.Technologies); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		if err := json.Unmarshal(typesJSON, &p.Types); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Handle nullable Links object
		if linksJSON != nil {
			var links models.Links
			if err := json.Unmarshal(linksJSON, &links); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			p.Links = links
		}

		projects = append(projects, p)
	}

	c.JSON(http.StatusOK, projects)
}

func GetProject(c *gin.Context) {
	id := c.Param("id")
	projectID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid project ID"})
		return
	}

	var p models.Project
	var techJSON, typesJSON, linksJSON []byte
	var link, doi sql.NullString // Using sql.NullString for nullable fields

	err = db.DB.QueryRow(`
		SELECT id, title, date, description, technologies, types, link, doi, links, created_at
		FROM projects WHERE id = $1`,
		projectID).Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &typesJSON, &link, &doi, &linksJSON, &p.CreatedAt)

	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	// Handle nullable strings
	if link.Valid {
		p.Link = &link.String
	}
	if doi.Valid {
		p.DOI = &doi.String
	}

	// Unmarshal JSON arrays
	if err := json.Unmarshal(techJSON, &p.Technologies); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if err := json.Unmarshal(typesJSON, &p.Types); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Handle nullable Links object
	if linksJSON != nil {
		var links models.Links
		if err := json.Unmarshal(linksJSON, &links); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		p.Links = links
	}

	c.JSON(http.StatusOK, p)
}
