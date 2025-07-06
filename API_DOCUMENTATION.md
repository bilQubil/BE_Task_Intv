# Pelindo Biodata Backend API Documentation

## Overview

The Pelindo Biodata Backend API is a RESTful API built with Node.js, Express.js, and Sequelize ORM for managing employee biodata, education history, job history, and training history.

## Table of Contents

-   [Setup & Installation](#setup--installation)
-   [Environment Configuration](#environment-configuration)
-   [Database Setup](#database-setup)
-   [Authentication](#authentication)
-   [API Endpoints](#api-endpoints)
-   [Error Handling](#error-handling)
-   [Data Models](#data-models)
-   [Sequelize CLI Usage](#sequelize-cli-usage)

## Setup & Installation

### Prerequisites

-   Node.js (v14 or higher)
-   PostgreSQL database
-   npm or yarn package manager

### Installation Steps

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd BE-Core
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    # Edit .env with your database credentials
    ```

4. **Run database migrations**

    ```bash
    npm run db:migrate
    ```

5. **Seed the database (optional)**

    ```bash
    npm run db:seed
    ```

6. **Start the server**

    ```bash
    # Development mode
    npm run dev

    # Production mode
    npm start
    ```

The server will run on `http://localhost:3000` by default.

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pelindo_biodata
DB_USERNAME=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
```

## Database Setup

### Available Scripts

-   `npx sequelize-cli model:generate --name ModelName --attributes attr1:type,attr2:type` - Create database model
-   `npx sequelize-cli db:migrate` - Run database migrations
-   `npx sequelize-cli db:seed` - Seed the database with initial data
-   `npx sequelize-cli db:drop` - Drop database

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### User Roles

-   **Regular User**: Can manage their own biodata and histories
-   **Admin**: Can view, update, and delete all biodata and histories

## API Endpoints

### Base URL

```
http://localhost:3000
```

### Authentication Endpoints

#### Register User

```http
POST /auth/register
```

**Request Body:**

```json
{
    "email": "user@example.com",
    "password": "Password123"
}
```

**Validation Rules:**

-   Email: Must be a valid email format
-   Password: Minimum 6 characters, must contain at least one uppercase letter, one lowercase letter, and one number

**Response (201):**

```json
{
    "message": "User registered successfully",
    "user": {
        "id": 1,
        "email": "user@example.com",
        "isAdmin": false
    }
}
```

#### Login User

```http
POST /auth/login
```

**Request Body:**

```json
{
    "email": "user@example.com",
    "password": "Password123"
}
```

**Response (200):**

```json
{
    "message": "Login successful",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": 1,
        "email": "user@example.com",
        "isAdmin": false
    }
}
```

### Biodata Endpoints (User)

_Requires Authentication_

#### Get User's Biodata

```http
GET /biodata/me
```

**Response (200):**

```json
{
    "id": 1,
    "userId": 1,
    "position": "Software Engineer",
    "fullName": "John Doe",
    "ktpNumber": "1234567890123456",
    "birthPlace": "Jakarta",
    "birthDate": "1990-01-01",
    "gender": "Male",
    "religion": "Islam",
    "bloodType": "A",
    "maritalStatus": "Single",
    "ktpAddress": "Jl. Example No. 123",
    "livingAddress": "Jl. Example No. 123",
    "email": "john@example.com",
    "phone": "081234567890",
    "emergencyContact": "081234567891",
    "skills": "JavaScript, Node.js, React",
    "placementWillingness": "Jakarta",
    "expectedSalary": 10000000,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### Create Biodata

```http
POST /biodata
```

**Request Body:**

```json
{
    "position": "Software Engineer",
    "fullName": "John Doe",
    "ktpNumber": "1234567890123456",
    "birthPlace": "Jakarta",
    "birthDate": "1990-01-01",
    "gender": "Male",
    "religion": "Islam",
    "bloodType": "A",
    "maritalStatus": "Single",
    "ktpAddress": "Jl. Example No. 123",
    "livingAddress": "Jl. Example No. 123",
    "email": "john@example.com",
    "phone": "081234567890",
    "emergencyContact": "081234567891",
    "skills": "JavaScript, Node.js, React",
    "placementWillingness": "Jakarta",
    "expectedSalary": 10000000
}
```

**Response (201):**

```json
{
    "id": 1,
    "userId": 1,
    "position": "Software Engineer"
    // ... other fields
}
```

### History Endpoints (User)

_Requires Authentication_

#### Get Education History

```http
GET /biodata/education
```

**Response (200):**

```json
[
    {
        "id": 1,
        "biodataId": 1,
        "educationLevel": "Bachelor",
        "institutionName": "University of Indonesia",
        "major": "Computer Science",
        "graduationYear": 2015,
        "gpa": 3.5,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
]
```

#### Add Education History

```http
POST /biodata/education
```

**Request Body:**

```json
{
    "educationLevel": "Bachelor",
    "institutionName": "University of Indonesia",
    "major": "Computer Science",
    "graduationYear": 2015,
    "gpa": 3.5
}
```

#### Get Job History

```http
GET /biodata/job
```

**Response (200):**

```json
[
    {
        "id": 1,
        "biodataId": 1,
        "companyName": "PT. Example",
        "lastPosition": "Junior Developer",
        "lastSalary": 8000000,
        "year": 2020,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
]
```

#### Add Job History

```http
POST /biodata/job
```

**Request Body:**

```json
{
    "companyName": "PT. Example",
    "lastPosition": "Junior Developer",
    "lastSalary": 8000000,
    "year": 2020
}
```

#### Get Training History

```http
GET /biodata/training
```

**Response (200):**

```json
[
    {
        "id": 1,
        "biodataId": 1,
        "courseName": "React Development",
        "hasCertificate": true,
        "year": 2023,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
    }
]
```

#### Add Training History

```http
POST /biodata/training
```

**Request Body:**

```json
{
    "courseName": "React Development",
    "hasCertificate": true,
    "year": 2023
}
```

### Admin Endpoints

_Requires Authentication + Admin Role_

#### Get All Biodata

```http
GET /admin/biodata
```

#### Get Biodata by ID

```http
GET /admin/biodata/:id
```

#### Update Biodata

```http
PUT /admin/biodata/:id
```

#### Delete Biodata

```http
DELETE /admin/biodata/:id
```

#### Get All Education Histories

```http
GET /admin/education
```

#### Get Education History by Biodata ID

```http
GET /admin/education/:id
```

#### Update Education History

```http
PUT /admin/education/:id
```

**Request Body:**

```json
{
    "EducationHistories": [
        {
            "educationLevel": "Bachelor",
            "institutionName": "University of Indonesia",
            "major": "Computer Science",
            "graduationYear": 2015,
            "gpa": 3.5
        }
    ]
}
```

#### Delete Education History

```http
DELETE /admin/education/:educationId
```

#### Job History Admin Endpoints

```http
GET /admin/job
GET /admin/job/:id
PUT /admin/job/:id
DELETE /admin/job/:jobId
```

#### Training History Admin Endpoints

```http
GET /admin/training
GET /admin/training/:id
PUT /admin/training/:id
DELETE /admin/training/:trainingId
```

## Error Handling

### Common Error Responses

#### 400 Bad Request

```json
{
    "message": "Validation failed",
    "errors": [
        "Email is required",
        "Password must be at least 6 characters long"
    ]
}
```

#### 401 Unauthorized

```json
{
    "message": "Access token required"
}
```

#### 403 Forbidden

```json
{
    "message": "Admin access required"
}
```

#### 404 Not Found

```json
{
    "message": "Biodata not found"
}
```

#### 500 Internal Server Error

```json
{
    "message": "Internal server error"
}
```

## Data Models

### User Model

```javascript
{
  id: INTEGER (Primary Key),
  email: STRING (Unique),
  password: STRING (Hashed),
  isAdmin: BOOLEAN (Default: false),
  createdAt: DATE,
  updatedAt: DATE
}
```

### Biodata Model

```javascript
{
  id: INTEGER (Primary Key),
  userId: INTEGER (Foreign Key),
  position: STRING,
  fullName: STRING,
  ktpNumber: STRING,
  birthPlace: STRING,
  birthDate: DATE,
  gender: STRING,
  religion: STRING,
  bloodType: STRING,
  maritalStatus: STRING,
  ktpAddress: TEXT,
  livingAddress: TEXT,
  email: STRING,
  phone: STRING,
  emergencyContact: STRING,
  skills: TEXT,
  placementWillingness: STRING,
  expectedSalary: INTEGER,
  createdAt: DATE,
  updatedAt: DATE
}
```

### EducationHistory Model

```javascript
{
  id: INTEGER (Primary Key),
  biodataId: INTEGER (Foreign Key),
  educationLevel: STRING,
  institutionName: STRING,
  major: STRING,
  graduationYear: INTEGER,
  gpa: FLOAT,
  createdAt: DATE,
  updatedAt: DATE
}
```

### JobHistory Model

```javascript
{
  id: INTEGER (Primary Key),
  biodataId: INTEGER (Foreign Key),
  companyName: STRING,
  lastPosition: STRING,
  lastSalary: INTEGER,
  year: INTEGER,
  createdAt: DATE,
  updatedAt: DATE
}
```

### TrainingHistory Model

```javascript
{
  id: INTEGER (Primary Key),
  biodataId: INTEGER (Foreign Key),
  courseName: STRING,
  hasCertificate: BOOLEAN,
  year: INTEGER,
  createdAt: DATE,
  updatedAt: DATE
}
```

## Database Relationships

-   **User** has one **Biodata** (One-to-One)
-   **Biodata** has many **EducationHistory** (One-to-Many)
-   **Biodata** has many **JobHistory** (One-to-Many)
-   **Biodata** has many **TrainingHistory** (One-to-Many)

## Security Features

-   Password hashing using bcryptjs
-   JWT token authentication
-   Input validation using Zod
-   CORS enabled
-   Role-based access control (Admin/User)

## Development

### Project Structure

```
BE-Core/
├── app.js                 # Main application file
├── bin/www               # Server startup file
├── config/
│   └── config.json       # Database configuration
├── controllers/          # Request handlers
├── helpers/             # Utility functions
├── middlewares/         # Custom middleware
├── migrations/          # Database migrations
├── models/              # Sequelize models
├── routes/              # Route definitions
└── seeders/             # Database seeders
```

### Available Scripts

-   `npm start` - Start production server
-   `npm run dev` - Start development server with nodemon
-   `npm test` - Run tests
-   `npm run db:migrate` - Run database migrations
-   `npm run db:seed` - Seed database with initial data
-   `npm run db:reset` - Reset database (drop, create, migrate, seed)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Sequelize CLI Usage

This project uses Sequelize CLI for database operations. For detailed information on using Sequelize CLI, see the [Sequelize CLI Guide](./SEQUELIZE_CLI_GUIDE.md).

### Quick Commands

```bash
# Database operations
npm run db:migrate    # Run migrations
npm run db:seed      # Run seeders
npm run db:reset     # Reset database (drop, create, migrate, seed)

# Create new migration
npx sequelize-cli migration:generate --name your-migration-name

# Create new seeder
npx sequelize-cli seed:generate --name your-seeder-name

# Create new model with migration
npx sequelize-cli model:generate --name ModelName --attributes attr1:type,attr2:type
```

## License

This project is licensed under the MIT License.
