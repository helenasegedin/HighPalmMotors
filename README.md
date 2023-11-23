# High Palm Motors Car Buying Website

A car buying website built with Node.js, Express, and Prisma.

## Features

- Users can submit car details through a form.
- Appointments can be scheduled using an integrated calendar.
- Form data is stored in a SQLite database using Prisma.
- Users receive confirmation emails for their appointments.
- Site owner receives notifications about new requests.

## Project Management

https://www.pivotaltracker.com/n/projects/2684194

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

    ```
    git https://github.com/helenasegedin/HighPalmMotors.git
    ```
   ```
   cd HighPalmMotors
    ```

2. Install dependencies:

   ```
    npm install
    ```

### Environment Variables

- Create a `.env` file in the root directory with the following variables:

    ```
    PORT=3000
    Database_URL="file:./dev.db"
    ```

### Database Setup

- The app uses Prisma with SQLite. Set up the database:

    ```
    npx prisma migrate dev
    npx prisma generate
    ```

## Usage

1. Start the development server:

    ```
    npm start
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).