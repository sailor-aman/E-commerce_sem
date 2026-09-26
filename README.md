# ELECTROMART

India-First Electronics Component Sourcing Marketplace

## Overview
Multi-vendor B2B electronics component sourcing and e-commerce marketplace.

## Architecture
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, TypeScript, REST API
- **Database**: PostgreSQL

The architecture enforces strict separation of concerns:
`Frontend UI -> Frontend API Service -> REST API -> Express Route -> Controller -> Service -> Repository -> PostgreSQL`

## Folder Structure
```
project-root/
├── frontend/ (React UI & Frontend API Services)
├── backend/ (Express API, Business Logic, DB Repositories)
├── database/ (Migrations and Seeds)
├── docs/ (Architecture & API documentation)
```

## Local Setup
1. Clone the repository.
2. Ensure you have Node.js and PostgreSQL installed.
3. Install backend dependencies: `cd backend && npm install`
4. Install frontend dependencies: `cd frontend && npm install`

## Environment Variables
Copy `.env.example` to `.env` in the root (or in backend/frontend as required) and update the values:
```
DATABASE_URL=postgresql://user:password@localhost:5432/electromart
PORT=5000
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

## Development Commands
- `npm run dev` in `backend/` to start the API server.
- `npm run dev` in `frontend/` to start the Vite dev server.

## Database Setup
1. Create a PostgreSQL database named `electromart`.
2. Update the `DATABASE_URL` in `.env`.
3. (Migrations to be added in future work)

## API Health Endpoint
- `GET /api/health` -> `{ "status": "ok", "db": "connected" }`

## Current Implementation Status
Phase 1: Foundation and architectural boundaries established. No business features implemented yet.
