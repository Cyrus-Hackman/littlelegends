# Little Legends School (LLS) Gateway

Welcome to the Little Legends School Gateway web application repository.

## Project Overview

This project is a modern web application built to manage and showcase the Little Legends School, including academic information, student life, tuition details, and more. It provides a sleek, responsive user interface designed for both prospective families and current students.

## Tech Stack

This project is built using:

- **React** - UI Library
- **Vite** - Build tool and development server
- **TypeScript** - For type-safe code
- **Tailwind CSS** - For modern styling
- **shadcn/ui** - Reusable UI component library
- **Supabase** - Backend and database platform
- **Framer Motion** - Animations

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have Node.js and npm installed.

### Installation

1. Navigate to the project directory:

   ```sh
   cd little-legends-gateway
   ```

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

### Development

To start the local development server:

```sh
npm run dev
```

Open the local URL provided by Vite (usually `http://localhost:5173`) in your browser to view the application.

### Building for Production

To create a production build:

```sh
npm run build
```

### Environment Variables

You must set up your `.env` file with the required environment variables (e.g., Supabase URL and keys, Vercel Analytics) before running the application locally.

## Deployment

The application is configured to be deployed easily. Ensure all environment variables are provided to your hosting platform (like Vercel, Netlify, or similar) prior to deployment.
