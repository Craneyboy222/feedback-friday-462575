# Enterprise Feedback Platform

## Overview
The Enterprise Feedback Platform is designed to facilitate user engagement and feedback collection for businesses. It includes features like user registration and authentication, profile management, feedback submission, and more.

## Features
- User Registration and Authentication
- Profile Management
- Feedback Submission and Browsing
- Survey Creation and Sharing
- Commenting and Discussion Threads
- Admin Dashboard

## Tech Stack
- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Hosting**: AWS (EC2, S3)
- **CI/CD**: GitHub Actions
- **Monitoring**: New Relic

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/enterprise-feedback-platform.git
   ```
2. Install dependencies:
   ```bash
   cd enterprise-feedback-platform
   npm install
   ```
3. Set up environment variables (see `.env.example` for reference).
4. Run the application:
   ```bash
   npm run dev
   ```

## Deployment
This application can be deployed using AWS EC2 and S3 for asset storage. Continuous integration is set up via GitHub Actions.

## Screenshots
![Home Page](screenshots/home.png)
![Feedback Submission](screenshots/feedback.png)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
