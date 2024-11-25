#!/bin/bash

# Drop and recreate the local database
psql -U postgres -c "DROP DATABASE IF EXISTS \"retro-portfolio\";"
psql -U postgres -c "CREATE DATABASE \"retro-portfolio\";"

# Restore the backup
pg_restore -U postgres -d retro-portfolio remote_backup.dump

echo "Backup restored to local database"
