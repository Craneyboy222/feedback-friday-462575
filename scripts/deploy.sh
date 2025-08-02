#!/bin/bash

# Deployment script for enterprise application

# Ensure the script is run from the project root
echo "Deploying application..."

# Build the frontend
cd client && npm run build

# Sync frontend build to S3
aws s3 sync build/ s3://myapp-bucket

# Navigate back to the server directory
cd ../server

# Install server dependencies
npm install

# Restart the Node.js server using pm2 (ensure pm2 is installed)
pm2 restart server

echo "Deployment complete!"