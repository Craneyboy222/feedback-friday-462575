#!/bin/bash

# Database seeding script for enterprise application

# Seed the database with initial data

# Ensure the script is run from the server directory
cd server

# Using Sequelize CLI for seeding
npx sequelize-cli db:seed:all

echo "Database seeding complete!"