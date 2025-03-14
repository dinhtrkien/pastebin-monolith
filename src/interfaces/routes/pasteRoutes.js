// src/interfaces/index.js
const express = require("express");
const router = express.Router();

const pasteController = require("../../domain/paste/pasteController");

// Landing page or create paste form
router.get("/", pasteController.showCreatePastePage);

// Handle create paste (form POST)
router.post("/paste", pasteController.createPaste);

// Paste detail page
router.get("/paste/:slug", pasteController.showDetailPage);

module.exports = router;