// routes/prodRoutes.js

const express = require("express");
const router = express.Router();
const {getProducts, createProd, updateProd, deleteProd, newEquipForm, getEditForm} = require("../controllers/prodController");

// CRUD Routes
router.get("/", getProducts);  // Show list of products
router.get("/newequip", newEquipForm);  // Show form to add a new product
router.post("/newequip", createProd);  // Add new product to DB
router.get("/products/:id/edit", getEditForm);  // Show edit form for a specific product
router.post("/products/:id/edit", updateProd);  // Handle form submission to update the product
router.post("/products/:id/delete", deleteProd);  // Handle delete request for product

module.exports = router;