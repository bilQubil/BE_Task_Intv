# Pelindo Biodata Backend

## Overview

The Pelindo Biodata Backend is a Node.js application that serves as the backend API for the Pelindo Biodata Application. It provides endpoints for managing user biodata, including authentication, authorization, and CRUD operations for various biodata components.

## Features

-   User Authentication and Authorization
-   Biodata Management
-   Education History Management
-   Training History Management
-   Job History Management

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

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd pelindo_biodata_app/BE-Core
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file based on the `.env.example` file.

4. Run database migrations and seeders:
    ```bash
    npm run db:migrate
    npm run db:seed
    ```

## Usage

-   Start the application in development mode:

    ```bash
    npm run dev
    ```

-   Start the application in production mode:
    ```bash
    npm start
    ```

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
