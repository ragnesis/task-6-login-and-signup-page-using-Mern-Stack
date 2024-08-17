# MERN Stack Authentication

This project is a full-stack authentication application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes user registration and login functionalities with JWT-based authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- Toggle between Login and Registration forms
- Redirects to YouTube upon successful login

## Getting Started

### Prerequisites

- Node.js
- MongoDB (either locally or via MongoDB Atlas)
- npm

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   cd mern-auth
Backend Setup

Navigate to the backend directory:
cd backend
Install the required dependencies:
npm install
Create a .env file in the backend directory and add your MongoDB connection string:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.fanx3.mongodb.net/mydatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
Start the backend server:
npm start


Frontend Setup

Navigate to the frontend directory:
cd ../frontend

Install the required dependencies:
npm install

Start the React development server:
npm start

Usage
Register: Use the registration form to create a new user account.
Login: Use the login form to access the application. Upon successful login, you will be redirected to YouTube.

Directory Structure
mern-auth/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   ├── App.js
    │   └── index.js
    └── package.json

Troubleshooting
Ensure MongoDB is running and accessible.
Verify the MongoDB connection string and JWT secret in your .env file.
Check for any errors in the terminal and resolve them accordingly.

Tech used
MongoDB
Express.js
React
Node.js

