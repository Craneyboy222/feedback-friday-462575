#!/bin/bash

# Test script for enterprise application

# Run backend tests
echo "Running backend tests..."
cd server
npm test

# Run frontend tests
echo "Running frontend tests..."
cd ../client
npm test

echo "All tests completed!"