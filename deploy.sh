#!/bin/bash

# Variables
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKEND_DIR="/var/www/retro-portfolio/backend"
FRONTEND_DIR="/var/www/retro-portfolio/frontend"
DB_NAME="your_database_name"  # Replace with your actual database name

# 1. Backup Database
echo "Backing up database..."
pg_dump $DB_NAME > "${BACKEND_DIR}/backup_${TIMESTAMP}.sql"

# 2. Apply Database Migration
echo "Applying database migration..."
psql $DB_NAME << 'EOF'
-- Backup the table
CREATE TABLE IF NOT EXISTS projects_backup AS SELECT * FROM projects;

-- Add new types column if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name='projects' AND column_name='types') THEN
        ALTER TABLE projects ADD COLUMN types JSONB;
        
        -- Convert existing type values to types array
        UPDATE projects 
        SET types = json_build_array(type)::jsonb 
        WHERE type IS NOT NULL;
        
        -- Drop old type column
        ALTER TABLE projects DROP COLUMN IF EXISTS type;
        
        -- Make types NOT NULL
        ALTER TABLE projects ALTER COLUMN types SET NOT NULL;
    END IF;
END $$;
EOF

# 3. Update Backend
echo "Updating backend..."
sudo systemctl stop retro-portfolio.service
cd $BACKEND_DIR
mv build "build_backup_${TIMESTAMP}"
go build -o build/app cmd/main.go
sudo systemctl start retro-portfolio.service

# 4. Update Frontend
echo "Updating frontend..."
cd $FRONTEND_DIR
npm install
npm run build
sudo cp -r build/* /var/www/retro-portfolio/frontend/

# 5. Reload Nginx
echo "Reloading nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "Deployment completed!"
echo "Checking service status..."
sudo systemctl status retro-portfolio.service
