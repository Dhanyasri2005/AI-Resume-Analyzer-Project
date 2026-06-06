# AI Resume Analyzer

## Project Description

AI Resume Analyzer is a MERN Stack web application that helps users analyze their resumes using AI. Users can upload a resume, compare it with a job description, calculate an ATS match score, identify missing skills, receive improvement suggestions, and generate interview questions.

## Features

* User Registration and Login
* Resume Upload and Analysis
* ATS Match Score Calculation
* Missing Skills Detection
* Resume Improvement Suggestions
* Interview Question Generation
* Responsive Dashboard UI

## Technologies Used

* React.js
* Vite
* Node.js
* Express.js
* MongoDB Atlas
* Gemini AI API
* Vercel

## Database Schema

### User Collection

```json
{
  "username": "String",
  "email": "String",
  "password": "String",
  "createdAt": "Date"
}
```

### Resume Analysis Collection

```json
{
  "userId": "ObjectId",
  "resumeText": "String",
  "jobDescription": "String",
  "matchScore": "Number",
  "missingSkills": ["String"],
  "suggestions": ["String"],
  "interviewQuestions": ["String"],
  "createdAt": "Date"
}
```

## Setup Instructions

### Clone Repository

git clone <repository-url>

### Client Setup

cd client
npm install
npm run dev

### Server Setup

cd server
npm install
npm start

## Environment Variables

### Server

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

## Deployment

Frontend: Vercel

Backend: Vercel

Database: MongoDB Atlas

## Author

Dhanyasri
