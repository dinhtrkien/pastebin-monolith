// src/interfaces/index.js
const express = require("express");
const router = express.Router();

const cleanupController = require("../domain/cleanup/cleanupController");


// Handle cleanup paste (form POST)
router.post("/cleanup");



module.exports = router;