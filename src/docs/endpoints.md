# API Endpoints Documentation

## Authentication

### Register a new user
- **Endpoint:** `POST /api/register`
- **Request Body:**
  - `username`: string
  - `email`: string
  - `password`: string
- **Responses:**
  - `201`: User registered successfully
  - `400`: Bad request

### Login a user
- **Endpoint:** `POST /api/login`
- **Request Body:**
  - `email`: string
  - `password`: string
- **Responses:**
  - `200`: User logged in successfully
  - `401`: Unauthorized

## User Profile

### Get user profile
- **Endpoint:** `GET /api/profile`
- **Responses:**
  - `200`: Successful retrieval of user profile
  - `403`: Forbidden

### Update user profile
- **Endpoint:** `PUT /api/profile`
- **Request Body:**
  - `profile_info`: string
- **Responses:**
  - `200`: Profile updated successfully
  - `400`: Bad request

## Feedback

### Submit feedback
- **Endpoint:** `POST /api/feedback`
- **Responses:**
  - `201`: Feedback submitted successfully

### Get list of feedback
- **Endpoint:** `GET /api/feedback`
- **Responses:**
  - `200`: Successfully retrieved feedback list

### Get specific feedback details
- **Endpoint:** `GET /api/feedback/:id`
- **Parameters:**
  - `id`: Feedback ID
- **Responses:**
  - `200`: Feedback details retrieved successfully
  - `404`: Feedback not found

## Survey, Comments, Promo Codes, Votes
- Similar structure follows for other features.