
# Backend API for StudyBuddy

This folder contains the mock backend API for the StudyBuddy application.

## Structure
- `controllers/`: Handle request/response logic
- `models/`: Define data structures and database models
- `routes/`: Define API endpoints
- `middlewares/`: Custom middleware functions
- `services/`: Business logic and external services
- `utils/`: Helper functions and utilities
- `config/`: Configuration files

## Database
The application uses an in-memory database simulated through JavaScript objects:
- `users`: Stores user information and credentials
- `notes`: Stores study notes and resources

The database operations are available in the `utils/database.ts` file, which provides a simulated interface for CRUD operations.

## Usage
This backend is currently a mock implementation that simulates API responses.

