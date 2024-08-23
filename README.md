# BookNest - Frontend

This repository contains the frontend code for the BookNest application, built with Angular and styled using Tailwind CSS.

## Table of Contents

- Project Structure
- Prerequisites
- Installation
- Running the Application
- Connecting to the Backend
- Environment Variables
- Built With
- License

## Project Structure

The project structure is as follows:

src/
  ├── app/
  ├── assets/
  ├── environments/
  ├── index.html
  ├── main.ts
  └── styles.css

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Angular CLI (v12 or later)
  - Install globally using: npm install -g @angular/cli

## Installation

1. **Clone the repository**:

   git clone https://github.com/Hackintosh-02/BookNest-frontend.git

2. **Navigate to the project directory**:

   cd BookNest-frontend

3. **Install dependencies**:

   npm install

## Running the Application

1. **Start the Angular development server**:

   ng serve

2. **Access the application**:

   Open your web browser and go to http://localhost:4200/.

## Connecting to the Backend

This frontend is designed to work with the BookNest backend, which is hosted in a separate repository. Ensure that the backend is running locally or is accessible via a remote server.

Backend Repository: [BookNest Backend](https://github.com/Hackintosh-02/BookNest-backend)

If the backend is running on a different URL or port, you may need to configure the frontend to point to the correct API endpoint. This can usually be done in the Angular service files where HTTP requests are made.

## Environment Variables

- The frontend does not require any special environment variables to run. It connects to the backend API at a specified URL, which you can configure if needed.

## Built With

- Angular - Framework used for building the frontend.
- Tailwind CSS - Utility-first CSS framework for styling.

## License

This project is licensed under the MIT License.
