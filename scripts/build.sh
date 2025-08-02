#!/bin/bash

# Build script for enterprise application

# Build the frontend assets
echo "Building frontend..."
cd client
npm run build

# Return to the root directory
cd ..
echo "Build complete!"