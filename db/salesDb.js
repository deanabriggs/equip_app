// db/salesDb.js

require("dotenv").config();

// Require MongoDB client
const {MongoClient} = require("mongodb");

let db;

async function connectToDb() {
    if (db) return db;
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        db = client.db("sales");
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB: ", error);
        throw error;
    }
}

const getDb = () => {
    if (!db) {
        throw new Error ("Database is not connected")
    }
    return db;
}
    
module.exports = {
    connectToDb, 
    getDb
}