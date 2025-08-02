#!/bin/bash

# Setup script for enterprise application

# Update package lists
sudo apt-get update

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Setup PostgreSQL user and database
sudo -u postgres psql -c "CREATE USER myappuser WITH PASSWORD 'securepassword';"
sudo -u postgres psql -c "CREATE DATABASE myappdb OWNER myappuser;"

# Install AWS CLI
sudo apt-get install -y awscli

# Install New Relic
npm install newrelic --save

# Navigate to the project directory
cd /path/to/your/project

# Install project dependencies
npm install

# Install frontend dependencies
cd client && npm install

# Return to project root
echo "Setup complete!"