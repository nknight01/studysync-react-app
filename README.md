# StudySync

StudySync is a college study planner designed to help students organize their schedules, track assignments, and set academic goals.

## Features

- Plan class schedules and study sessions.
- Track homework, projects, and exams.
- Set manageable academic goals.
- Responsive layout for smaller screens.
- User login and logout functionality.
- Protected student dashboard.
- Authenticated requests to the backend API.
- Handles unauthorized and forbidden requests.

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- React Router
- Fetch API

## Getting Started

### Requirements

Install Node.js and npm before starting.

### Installation

1. Clone this repository from GitHub.
2. Open a terminal in the project folder.
3. Install the dependencies:

   `npm install`

### Run the Development Server

Start the local website:

   `npm run dev`

Open the local URL displayed in the terminal.

### Build for Production

Create the production build:

   `npm run build`

### Preview the Production Build

Test the built website locally:

   `npm run preview`

## Homework 11 – Route Plan

| URL | View |
|---|---|
| `/` | Home page – StudySync landing page |
| `/items` | Item list – displays study assignments |
| `/items/:id` | Item details – displays the selected assignment |

### Navigation

Users can navigate from the home page to the assignment list and select an assignment to view its details. Internal navigation uses React Router links.

### Data

Assignment details are determined by the ID in the URL. If an assignment ID does not exist, the application displays a not-found message.

### Testing

Navigation is tested by clicking links, entering URLs directly, refreshing pages, using browser Back, and entering an invalid assignment ID.

## Homework 12 – Authentication and Backend Integration

### Login

StudySync includes a login interface that connects to an Express backend.

Users must provide an email and password to access the protected dashboard.

### Authentication

After a successful login, the frontend receives a JSON Web Token (JWT) from the backend. The token is used in authenticated API requests through the Authorization Bearer header.

### Protected Routes

The `/dashboard` route requires authentication. Users who are not logged in are redirected to the login page.

### Backend API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/login` | Authenticates a user |
| GET | `/api/me` | Returns protected user information |
| GET | `/api/admin` | Demonstrates administrator-only access |
| POST | `/api/logout` | Handles the logout request |

### Authorization and Error Handling

- **200 OK:** Request successful.
- **401 Unauthorized:** User is not authenticated or credentials are invalid.
- **403 Forbidden:** User is authenticated but does not have permission.

The frontend displays appropriate messages when authentication or authorization fails.

### Security Notes

- Authentication tokens are maintained in frontend application state.
- The JWT secret is stored in the backend environment file.
- Database passwords, server secrets, private API keys, and other sensitive information must never be committed to a public frontend repository.
- The frontend communicates with the backend using HTTP requests.

### Backend Connection

The StudySync frontend connects to the backend at:

`http://localhost:3000`

The backend must be running for login and protected API requests to work.

