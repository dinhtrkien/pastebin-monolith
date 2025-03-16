// src/index.js
const express = require("express");
const router = express.Router();
const pasteRoutes = require("./pasteRoutes");
const analyticsRoutes = require("./analyticsRoutes");
const cleanupRoutes = require("./cleanupRoutes")

router.use("/", analyticsRoutes);
router.use("/", pasteRoutes);
router.use("/", cleanupRoutes)


module.exports = router;