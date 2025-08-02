# API Reference

## Overview
This document provides a detailed reference for the API endpoints available in the Enterprise Application.

## Authentication

### POST /api/register
- **Description:** Register a new user.
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  - `username`: string
  - `email`: string
  - `password`: string
- **Responses:**
  - `201`: User registered successfully
  - `400`: Bad request

### POST /api/login
- **Description:** Login a user.
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  - `email`: string
  - `password`: string
- **Responses:**
  - `200`: User logged in successfully
  - `401`: Unauthorized

## User Profile

### GET /api/profile
- **Description:** Retrieve the current user's profile.
- **Request Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `200`: Profile data
  - `403`: Forbidden

### PUT /api/profile
- **Description:** Update the current user's profile.
- **Request Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- **Request Body:**
  - `profile_info`: string
- **Responses:**
  - `200`: Profile updated
  - `400`: Bad request

## Feedback

### POST /api/feedback
- **Description:** Submit user feedback.
- **Request Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- **Responses:**
  - `201`: Feedback submitted

### GET /api/feedback
- **Description:** Retrieve all feedback.
- **Responses:**
  - `200`: List of feedback

### GET /api/feedback/:id
- **Description:** Retrieve specific feedback by ID.
- **Parameters:**
  - `id`: Feedback ID
- **Responses:**
  - `200`: Feedback details
  - `404`: Not found

## Additional Features
- Similar structures and details are provided for surveys, comments, promo codes, and votes.