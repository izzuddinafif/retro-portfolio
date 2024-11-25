@echo off
setlocal

rem Remote database details
set REMOTE_DB_HOST=10.42.0.1
set REMOTE_DB_NAME=retro-portfolio
set REMOTE_DB_USER=portfolio
set REMOTE_DB_PASSWORD=392001

rem Create backup
set PGPASSWORD=%REMOTE_DB_PASSWORD%
pg_dump -h %REMOTE_DB_HOST% -U %REMOTE_DB_USER% -d %REMOTE_DB_NAME% -F c -f remote_backup.dump

echo Backup created as remote_backup.dump
pause
