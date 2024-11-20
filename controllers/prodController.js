// controllers/prodControllers.js

const {ObjectId}= require("mongodb");
// Get the database
const { getDb } = require("../db/salesDb");


const newEquipForm = (req, res) => {
    res.render("newequip"); // Renders the newequip.ejs form
};

// READ - send to be read by the browser
const getProducts = async (req, res) => {
    try{
        const db = getDb();
        const products = await db.collection("products").find().toArray();
        console.log("Fetched products: ", products); //for testing
        res.render("index", {products});
    } catch (error) {
        console.error("Error with fetching products: ", error);
        res.status(500).send("Failed to fetch products.");
    }
};

// CREATE using POST request
const createProd = async (req, res) => {
    try {
        const db = getDb();
        const {product, description, cost, retail}= (req.body);
        const newProd = {
            product,
            description,
            cost: parseFloat(cost),
            retail: parseFloat(retail),
        };
        const result = await db.collection("products").insertOne(newProd);

        console.log("Inserted product: ", result.insertedId);
        res.redirect("/");
    } catch (error) {
        console.error("Error inserting data into MongoDB: ", error);
        res.status(500).send("Failed to insert data into database.");
    };
};

// UPDATE
const updateProd = async (req, res) => {
    try {
        const db = getDb();
        const prodId = req.params.id;
        const updateData = req.body;
        
        // Ensure prodId is a valid ObjectId
        if (!ObjectId.isValid(prodId)) {
            return res.status(400).send("Invalid product ID.");
        }

        // Ensure prodId is a valid ObjectId
        if (!ObjectId.isValid(prodId)) {
            return res.status(400).send("Invalid product ID.");
        }

        const result = await db.collection("products").updateOne(
            { _id: new ObjectId(prodId)},
            { $set: updateData }
        );

        console.log("Updated product: ", result);
        res.redirect("/");
    } catch (error) {
        console.error("Error updating product: ", error);
        res.status(500).send("Failed to update product.");
    };
};

const deleteProd = async (req, res) => {
    try {
        const db = getDb();
        const prodId = req.params.id;

        // Log the prodId for debugging
        console.log("Product ID for deletion:", prodId);
        
        // Ensure prodId is a valid ObjectId
        if (!ObjectId.isValid(prodId)) {
            return res.status(400).send("Invalid product ID.");
        }

        const result = await db.collection("products").deleteOne({
            _id: new ObjectId(prodId),
        });

        if (result.deletedCount === 0) {
            return res.status(404).send("Product not found.");
        }

        console.log("Deleted product: ", result);
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting product: ", error);
        res.status(500).send("Failed to delete product.");
    }
};

// Get the product to be edited
const getEditForm = async (req, res) => {
    try {
        const db = getDb();
        const prodId = req.params.id;

        if (!ObjectId.isValid(prodId)) {
            return res.status(400).send("Invalid product ID.");
        }
        
        const product = await db.collection("products").findOne({ _id: new ObjectId(prodId) });
        if (!product) {
            return res.status(404).send("Product not found.");
        }
        res.render("edit", { product }); // Render the edit form with product data
    } catch (error) {
        console.error("Error fetching product for edit:", error);
        res.status(500).send("Failed to fetch product for editing.");
    }
};

// Export functions
module.exports = {
    getProducts,
    createProd,
    updateProd,
    deleteProd,
    getEditForm,
    newEquipForm
}