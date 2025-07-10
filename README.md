# Blog Application - Full Stack Project

A full-stack blog application built with React frontend and Node.js/Express backend, featuring CRUD operations for blog posts.

## Project Structure

```
part4Blog/
├── frontend/           # React frontend application
├── backend/           # Node.js/Express backend API
├── package.json       # Root package.json for frontend
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## Features

- **Frontend**: React application with Vite for fast development
- **Backend**: RESTful API built with Express.js
- **Database**: MongoDB with Mongoose ODM
- **CRUD Operations**: Create, Read, Update, Delete blog posts
- **Blog Schema**: Title, Author, URL, and Likes for each blog post

## Tech Stack

### Frontend

- React 19.1.0
- Vite 7.0.3
- ESLint for code quality

### Backend

- Node.js
- Express.js 5.1.0
- MongoDB with Mongoose 8.16.2
- CORS for cross-origin requests
- dotenv for environment variables

## Project Architecture

### Backend Structure

```
backend/
├── app.js              # Express app configuration
├── backend.js          # Server entry point
├── controllers/
│   └── blogs.js        # Blog route handlers
├── models/
│   └── blog.js         # Blog MongoDB schema
└── utils/
    ├── config.js       # Environment configuration
    ├── logger.js       # Logging utilities
    └── middleware.js   # Custom middleware
```

### Frontend Structure

```
frontend/
├── src/
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
└── public/             # Static assets
```

## Future Enhancements

- [ ] User authentication
- [ ] Blog categories
- [ ] Search functionality
- [ ] Comment system
- [ ] Rich text editor
- [ ] Image uploads
