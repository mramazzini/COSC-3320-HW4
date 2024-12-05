# My Application

> Deployed on Render: [Click Here](https://cosc-3380-hw4.onrender.com/)

> Github Repository: [Click Here](https://github.com/mramazzini/COSC-3380-HW4)

> Video Link: [Click Here](https://drive.google.com/file/d/1jO6i2C-S05uL_sFdpleCKggXo19Xm5HN/view?usp=sharing)

This is a Node.js application that requires a PostgreSQL database to be set up on your local machine. Follow these steps to get the application running.

## Requirements

- **Node.js** (Latest Version)
- **PostgreSQL** Must be installed on your local machine.

## Setup Guide

1. **Clone the Repository**

   ```bash
   git clone <clone link>
   cd your-repo
   ```

2. **Configure Environment Variables**

- Locate the `.example.env` file in the root directory.
- Rename it to `.env`
- Open `.env` in a text editor and update the values

```env
DB_HOST='localhost'
DB_NAME='pizza' # Make sure to create a database named "pizza" in your PostgreSQL connection.
DB_USER='postgres'
DB_PASS='YOUR_POSTGRES_PASSWORD' # Replace this with your actual PostgreSQL password.
```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

## Usage

- Open your browser and visit `http://localhost:3000`
- The application will automatically run the `CreateTable.sql` and `SeedTables.sql` scripts to create and seed the database tables.
