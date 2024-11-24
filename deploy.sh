cd /var/www/retro-portfolio/backend
go build -o build/app main.go
sudo systemctl restart retro-portfolio.service
cd /var/www/retro-portfolio/frontend
npm run build
