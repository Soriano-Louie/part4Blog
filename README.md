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

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd part4Blog
   ```

2. **Install Frontend Dependencies**

   ```bash
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `backend` directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3001
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev          # Development mode with nodemon
   # or
   npm start           # Production mode
   ```

2. **Start the Frontend Development Server**

   ```bash
   # From project root
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3001`

## API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/blogs`     | Get all blogs       |
| GET    | `/api/blogs/:id` | Get a specific blog |
| POST   | `/api/blogs`     | Create a new blog   |
| DELETE | `/api/blogs/:id` | Delete a blog       |

### Blog Object Structure

```json
{
  "title": "Blog Title",
  "author": "Author Name",
  "url": "https://blog-url.com",
  "likes": 0
}
```

## Development Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend

- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Code Quality

- **ESLint**: Configured for both frontend and backend
- **Stylistic Rules**: Enforced code formatting
- **Error Handling**: Comprehensive error handling middleware

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

ISC License

## Environment Variables

| Variable      | Description               | Example                             |
| ------------- | ------------------------- | ----------------------------------- |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/blogapp` |
| `PORT`        | Backend server port       | `3001`                              |

## Troubleshooting

- **MongoDB Connection Issues**: Verify your `MONGODB_URI` in the `.env` file
- **CORS Errors**: Backend includes CORS middleware for frontend requests
- **Port Conflicts**: Change `PORT` in `.env` if 3001 is occupied

## Future Enhancements

- [ ] User authentication
- [ ] Blog categories
- [ ] Search functionality
- [ ] Comment system
- [ ] Rich text editor
- [ ] Image uploads
