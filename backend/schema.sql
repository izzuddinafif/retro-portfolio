DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS projects;

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[] NOT NULL,
    type VARCHAR(50) NOT NULL,
    link VARCHAR(255),
    doi VARCHAR(255),
    links JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
