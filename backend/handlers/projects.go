package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/izzuddinafif/retro-portfolio/backend/db"
	"github.com/izzuddinafif/retro-portfolio/backend/models"
)

func GetProjects(c *gin.Context) {
	rows, err := db.DB.Query(`
		SELECT id, title, date, description, technologies, type, link, doi, links, created_at
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
		var techJSON, linksJSON []byte
		err := rows.Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &p.Type,
			&p.Link, &p.DOI, &linksJSON, &p.CreatedAt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		err = json.Unmarshal(techJSON, &p.Technologies)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		if linksJSON != nil {
			err = json.Unmarshal(linksJSON, &p.Links)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
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
	var techJSON, linksJSON []byte
	err = db.DB.QueryRow(`
		SELECT id, title, date, description, technologies, type, link, doi, links, created_at
		FROM projects WHERE id = $1`,
		projectID).Scan(&p.ID, &p.Title, &p.Date, &p.Description, &techJSON, &p.Type,
		&p.Link, &p.DOI, &linksJSON, &p.CreatedAt)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	err = json.Unmarshal(techJSON, &p.Technologies)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if linksJSON != nil {
		err = json.Unmarshal(linksJSON, &p.Links)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	}

	c.JSON(http.StatusOK, p)
}
