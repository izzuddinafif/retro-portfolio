# Retro Portfolio Website

A modern portfolio website with a retro aesthetic, built using React and Go. This project showcases a full-stack implementation with a focus on clean architecture and modern development practices.

## Project Overview

This portfolio website combines modern web technologies with a retro-inspired design. It features:

- **Frontend**: React application with TypeScript and Tailwind CSS
- **Backend**: Go-based REST API with PostgreSQL database
- **Architecture**: Clean, modular design with clear separation of concerns

## Technology Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Vite as build tool
- ESLint for code quality
- Environment-based configuration

### Backend
- Go (Golang)
- PostgreSQL database
- RESTful API design
- Modular command structure
- Environment-based configuration

## Project Structure

```
retro-portfolio/
├── frontend/                # React frontend application
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   └── dist/               # Build output
│
├── backend/                # Go backend application
│   ├── cmd/                # Command-line tools
│   │   ├── setup/         # Database setup
│   │   ├── populate/      # Data population
│   │   ├── list/          # Project listing
│   │   └── insert/        # Data insertion
│   ├── db/                # Database connection and models
│   ├── handlers/          # HTTP request handlers
│   ├── models/            # Data models
│   └── scripts/           # Utility scripts
```

## Features

- Modern, responsive UI with retro aesthetics
- Project showcase with filtering capabilities
- Dynamic content management
- RESTful API endpoints
- PostgreSQL database integration
- Environment-based configuration
- Command-line tools for database management

## Setup and Installation

### Prerequisites
- Node.js (v20.18.0 or higher)
- Go (1.20 or higher)
- PostgreSQL (12 or higher)

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file with required configuration
4. Start development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install Go dependencies:
   ```bash
   go mod download
   ```
3. Create `.env` file with database configuration
4. Set up the database:
   ```bash
   go run cmd/setup/main.go
   ```
5. Start the server:
   ```bash
   go run main.go
   ```

## Database Management

The project includes several command-line tools for database management:

- `setup`: Creates database tables and schema
- `populate`: Populates database with initial data
- `list`: Lists current projects in the database
- `insert`: Inserts new projects

## Development

### Frontend Development
- Uses React with TypeScript for type safety
- Tailwind CSS for utility-first styling
- Vite for fast development and building
- ESLint configuration for code quality

### Backend Development
- Clean architecture with separation of concerns
- Modular command structure for different operations
- Environment-based configuration
- PostgreSQL for data persistence

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

[MIT License](LICENSE)

## Author

Izzuddin Afif

## Project Status

Currently in active development as part of a semester project.

---

*Note: This project is part of a semester project demonstrating full-stack development capabilities with modern web technologies.*
