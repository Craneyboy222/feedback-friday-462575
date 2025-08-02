#!/bin/bash

# Database migration script for enterprise application

# Apply database migrations

# Ensure the script is run from the server directory
cd server

# Using Sequelize CLI for migrations
npx sequelize-cli db:migrate

echo "Database migration complete!"