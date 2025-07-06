# Pelindo Biodata Backend

## Overview

The Pelindo Biodata Backend is a RESTful API built with Node.js, Express.js, and Sequelize ORM for managing employee biodata, education history, job history, and training history. It features JWT authentication, role-based access control, and comprehensive data validation.

## 📚 Documentation

-   **[Complete API Documentation](./API_DOCUMENTATION.md)** - Comprehensive guide with all endpoints, request/response formats, and setup instructions

## Features

-   🔐 JWT Authentication and Authorization
-   👤 User Registration and Login
-   📋 Biodata Management (CRUD operations)
-   🎓 Education History Management
-   🏢 Job History Management
-   📚 Training History Management
-   👑 Admin Panel for managing all user data
-   ✅ Input validation with Zod
-   🔒 Password hashing with bcryptjs
-   🌐 CORS support

## Project Structure

-   **app.js**: Entry point of the application.
-   **bin/www**: Script to start the server.
-   **config/**: Configuration files.
-   **controllers/**: Contains the logic for handling requests and responses.
    -   `adminController.js`
    -   `authController.js`
    -   `biodataController.js`
    -   `historyController.js`
-   **helpers/**: Utility functions for tasks like encryption and token management.
    -   `bcrypt.js`
    -   `jwt.js`
-   **middlewares/**: Middleware functions for authentication, authorization, error handling, and validation.
-   **migrations/**: Database migration files.
-   **models/**: Sequelize models for the database.
-   **routes/**: Express routers for different endpoints.
-   **seeders/**: Database seeder files.

## Quick Start

1. **Clone and install dependencies:**

    ```bash
    git clone <repository-url>
    cd pelindo_biodata_app/BE-Core
    npm install
    ```

2. **Set up environment variables:**

    ```bash
    cp .env.example .env
    # Edit .env with your database credentials
    ```

3. **Set up the database:**

    ```bash
    npm run db:migrate
    npm run db:seed  # Optional: Add sample data
    ```

4. **Start the server:**
    ```bash
    npm run dev  # Development mode
    npm start    # Production mode
    ```

The server will run on `http://localhost:3000` by default.

## API Usage

### Authentication

```bash
# Register a new user
POST /auth/register
{
  "email": "user@example.com",
  "password": "Password123"
}

# Login
POST /auth/login
{
  "email": "user@example.com",
  "password": "Password123"
}
```

### Biodata Operations

```bash
# Get user's biodata
GET /biodata/me
Headers: Authorization: Bearer <token>

# Create biodata
POST /biodata
Headers: Authorization: Bearer <token>
```

For complete API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

## Scripts

-   `npm start`: Start the application.
-   `npm run dev`: Start the application with nodemon for development.
-   `npm test`: Run tests.
-   `npm run db:migrate`: Run database migrations.
-   `npm run db:seed`: Seed the database.
-   `npm run db:reset`: Drop, create, migrate, and seed the database.

## Dependencies

-   `bcryptjs`: For password hashing.
-   `cors`: For enabling CORS.
-   `dotenv`: For environment variable management.
-   `ejs`: For templating.
-   `express`: Web framework for Node.js.
-   `jsonwebtoken`: For token-based authentication.
-   `pg`: PostgreSQL client for Node.js.
-   `sequelize`: Promise-based Node.js ORM for Postgres.
-   `zod`: For schema validation.

## Dev Dependencies

-   `sequelize-cli`: Command line interface for Sequelize.
-   `nodemon`: For automatically restarting the server during development.

## License

This project is licensed under the MIT License.
