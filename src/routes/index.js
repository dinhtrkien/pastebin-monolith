// src/index.js
const express = require("express");
const router = express.Router();
const pasteRoutes = require("./pasteRoutes");
const analyticsRoutes = require("./analyticsRoutes");

router.use("/", analyticsRoutes);
router.use("/", pasteRoutes);


module.exports = router;