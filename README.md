# Overview

This program uses Node with JavaScript to generate a dynamic webpage that interacts with a Mongo Database. It preforms CRUD functions and uses Node Express for midware functions.

This software is designed to manage current products that a business would sell, storing values in a database for other functions and needs. The current product list is displayed and items can be added, deleted, or updated.

To use the project, do the following:

- Clone the directory to a folder on your computer
- Run npm install in a terminal window within that directory
- Create an .env file in your root directory of the project
- Create a MongoDB name "sales" with a collection named "products" and setup a database user name and password
- You will need to update the Mongo Network Access to make it available for web browsers (use 0.0.0.0/0 for development)
- Within your MongoDB cluster, click "connect", select Compass, and copy the connection string
- In your .env file, create a variable "MONGODB_ULI" and set it to equal the MongoDB connection string (undating the user name and password)
- In the terminal window, type npm start (or npm start-dev) to launch the app
- In a web browser, go to localhost:3000 to test the web app

The benefits of being able to access and manage database information from anywhere has countless uses and applications. This application is just a small example of one.

[Software Demo Video](https://youtu.be/-YVJ0SEqsFw)

# Web Pages

When the webapp opens, you are brought to a home page that shows a list of current products that reflects values with a Mongo database with an option to edit or delete next to each item. Below the list is an option to add a new product.

If the user clicks the button to add a product, they will be taken to a new webpage with a form to enter details of the new product. Once they add a new product, they will be returned to the home page and the new item will be on the current products list.

If the user clicks on "edit" next to a product item, they will be taken to a third page with a form that looks similar to the form for adding a new product, but it will be pre-populated with the product information of the item they chose to edit. Once they submit the change, they will be redirected back to the home screen again where they will see the current list of equipment that will reflect the changed information.

If the user clicks the "delete" button, the item will imediately be removed from the list of current equipment.

All additions, edits, and deletions are taking place within a Mongo database in real time.

# Development Environment

- Windows 11 OS
- Visual Studio Code (1.95.3)
- Node.js (20.18.0)
- Express (4.21.1)
- MongoDB (6.10.0)
- dotenv (16.4.5)
- ejs (3.1.10)
- nodemon (3.1.7)

This project was build primarially coding in JavaScript with some simple implimentation of HTML and CSS for webpage design.
Node.js is the runtime environment used with the Express as the web framework.
MongoDB is the NoSQL database used to store and retrieve the data which is dynamically populating the website with the help of ejs for the HTML markup.
dotnet is managing environment variables to protect credentials needed for connecting to the database.
Nodemon is just a developer tool that helps by automatically restarting the project when updates are made that will impact the view.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
- [MongoDB Crash Course](https://www.youtube.com/watch?v=ofme2o29ngU)
- [Intro to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Node.js Tutorial](https://www.tutorialspoint.com/nodejs/index.htm)

# Future Work

- Have a login page that will only allow access for authorized users
- Instead of deleting a product, make it inactive
- Require a confirmation before deleting a product or making it inactive
- Add sort features
- Add search features
- Add categories and additional fields
- Have a products detail page, keeping the home page simple
- Add an inventory page
- Connect additional collections to interact with products (quotes, order forms, etc.)
