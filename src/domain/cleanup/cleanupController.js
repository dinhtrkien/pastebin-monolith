// cleanupController.js (Controller - Manages API routes and process lifecycle)
const express = require("express");
const router = express.Router();
const cleanupService = require("./cleanupService");
//const logger = require("../../logger");

// Route to trigger manual cleanup
router.post("/cleanup", async (req, res) => {
    try {
        const deletedCount = await cleanupService.cleanupPastes();
        res.status(200).json({ message: `Manual cleanup completed. ${deletedCount} pastes removed.` });
    } catch (error) {
        res.status(500).json({ error: "Cleanup failed." });
    }
});

// Render cleanup status page
router.get("/cleanup", (req, res) => {
    res.render("cleanupView", { lastCleanupTime: new Date().toISOString() });
});
