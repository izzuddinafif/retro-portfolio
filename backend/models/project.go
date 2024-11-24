package models

import "time"

type Links struct {
	Go         string `json:"go,omitempty"`
	Python     string `json:"python,omitempty"`
	Overthewire string `json:"overthewire,omitempty"`
	Hackthebox string `json:"hackthebox,omitempty"`
}

type Project struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Date        string    `json:"date"`
	Description string    `json:"description"`
	Technologies []string  `json:"technologies"`
	Type        string    `json:"type"`
	Link        string    `json:"link,omitempty"`
	DOI         string    `json:"doi,omitempty"`
	Links       Links     `json:"links,omitempty"`
	CreatedAt   time.Time `json:"created_at"`
}
