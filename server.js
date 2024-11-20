// server.js

// Require and packages and routes
require("dotenv").config();
const express = require("express");
const path = require("path");
const {connectToDb} = require ("./db/salesDb");
const prodRoutes = require("./routes/prodRoutes");

// use Express
const app = express();

// Sets EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set a variable for a port reference
const port = process.env.PORT || 3000;
       
// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// Connect to DB
connectToDb()
    .then(()=>{
        console.log("Connected to database.");

        // Make available for a web browser to access at the port reference
        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        });
    })
    .catch((error)=>{
        console.error("Failed to connect to database: ", error);
        proecess.exit(1);
    })

// Routes
app.use("/", prodRoutes);     
