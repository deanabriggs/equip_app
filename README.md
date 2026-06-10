# Equipment Manager — Node, Express & MongoDB

A dynamic web app for managing a business's product/equipment catalog. It performs full CRUD operations against a MongoDB database, letting users view the current product list and add, edit, or delete items in real time.

## Overview

This application manages the products a business sells, storing the data in MongoDB so it can support other functions and needs. The current product list is displayed on the home page, and items can be added, deleted, or updated — with every change reflected in the database immediately.

It's a small example of a much larger idea: being able to access and manage database information from anywhere has countless applications.

## Getting Started

1. Clone the repository to a folder on your computer.
2. Run `npm install` in a terminal inside that directory.
3. Create a `.env` file in the project root.
4. In MongoDB, create a database named `sales` with a collection named `products`, and set up a database user with a username and password.
5. Update the MongoDB Network Access settings to allow web access (use `0.0.0.0/0` for development).
6. In your MongoDB cluster, click **Connect → Compass** and copy the connection string.
7. In your `.env` file, add a variable `MONGODB_URI` and set it to your connection string (with your username and password filled in).
8. Run `npm start` (or `npm run start-dev`) to launch the app.
9. Open `localhost:3000` in a browser to test the app.

## How It Works

When the app opens, the home page shows the current list of products pulled from MongoDB, with edit and delete options next to each item and an option to add a new product below the list.

- **Add** takes the user to a form for entering a new product's details, then returns to the home page with the new item in the list.
- **Edit** opens a similar form pre-populated with the selected product's information; submitting redirects back to the updated list.
- **Delete** immediately removes the item from the list.

All additions, edits, and deletions take place in MongoDB in real time.

## Development Environment

- Windows 11
- Visual Studio Code (1.95.3)
- Node.js (20.18.0)
- Express (4.21.1)
- MongoDB (6.10.0)
- dotenv (16.4.5)
- ejs (3.1.10)
- nodemon (3.1.7)

The project is written primarily in JavaScript with some HTML and CSS for page design. Node.js is the runtime with Express as the web framework; MongoDB is the NoSQL data store, dynamically populating pages with the help of EJS for markup. dotenv manages environment variables to protect database credentials, and nodemon automatically restarts the project during development.

## Demo

<!-- TODO: add Software Demo Video link -->

## Useful Resources

- CRUD app with Node, Express, and MongoDB
- MongoDB Crash Course
- Intro to Node.js
- Node.js Tutorial

## Future Work

- Add a login page so only authorized users have access
- Make products inactive instead of deleting them
- Require confirmation before deleting or deactivating a product
- Add sorting and search features
- Add categories and additional fields
- Add a product detail page to keep the home page simple
- Add an inventory page
- Connect additional collections (quotes, order forms, etc.)
