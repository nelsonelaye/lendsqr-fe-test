# Lendsqr FE Assessment Test

This repository contains the frontend implementation for the Lendsqr Frontend Engineering assessment. Built with Next.js (App Router), React, Sass, and TypeScript.

**Live Demo:** [https://nelson-elaye-lendsqr-fe-test.vercel.app](https://nelson-elaye-lendsqr-fe-test.vercel.app/login)

## Overview
This project implements the pages specified in the Assessment document and in the provided design file: Login, Dashboard, User page, User details page. The goal of this implementation is to showcase a scalable approach to building a modern React application. 

It highlights efficient API request handling, robust reusable UI components, responsive SCSS styling, and solid unit test coverage.

*(Note: A more detailed architectural document explaining specific methodologies, trade-offs, and decisions made during development is provided separately.)*

## Architecture & Stack

**Core Stack:**
- **Next.js (App Router) & React:** Utilized for modern frontend architecture, routing, and React Server Components to ensure an optimized, highly performant UIs.

- **TypeScript:** Enforces strict type safety across component props, APIs, and state.

- **Sass (SCSS modules):** For styling to leverage powerful CSS nesting, variables, mixins, isolated and modular styling.

- **TanStack React Query:** For robust data fetching and API request state management. It handles data caching, background updates, loading states, and complex pagination logics without depending on `useEffect`.

- **Jest & React Testing Library:** To test critical user paths, component rendering, edge cases (empty states, error states), and API handlers.

**Design Approach:**
The application isolates complex logic into reusable, bite-sized components (e.g., `Pagination`, `UserMenu`, `StatsCard`). This keeps top-level layout pages declarative and readable. To securely handle external remote requests and transform response objects nicely for the frontend components, an internal Next.js API layer acts as a Backend-For-Frontend (BFF) proxy to fetch the data.

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation & Running the App
1. Install project dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Running Tests
Automated tests have been written to cover the critical UI components, page integrations, and the API request handlers. To run the test suites, use:
```bash
npm run test
```
