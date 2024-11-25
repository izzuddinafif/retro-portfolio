#!/bin/bash

# Replace these with your remote database details
REMOTE_DB_HOST="your-remote-host"
REMOTE_DB_NAME="retro-portfolio"
REMOTE_DB_USER="your-remote-user"

# Create backup
PGPASSWORD="your-remote-password" pg_dump -h $REMOTE_DB_HOST -U $REMOTE_DB_USER -d $REMOTE_DB_NAME -F c -f remote_backup.dump

echo "Backup created as remote_backup.dump"
