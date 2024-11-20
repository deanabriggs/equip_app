# Overview

This program uses Node with JavaScript to generate a dynamic webpage that interacts with a Mongo Database. It preforms CRUD functions and uses Node Express for midware functions.

This software is designed to manage current products that a business would sell, storing values in a database for other functions and needs. The current product list list is displayed and items can be added, deleted, or updated. You can access an active version of this software at https://equip-app.onrender.com.

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

4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

{Describe each of the web pages you created and how the web app transitions between each of them. Also describe what is dynamically created on each page.}

# Development Environment

{Describe the tools that you used to develop the software}

{Describe the programming language that you used and any libraries.}

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
- [Web Site Name](http://url.link.goes.here)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Item 1
- Item 2
- Item 3
