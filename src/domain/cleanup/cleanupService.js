// Service for cleanup pastes
// cleanupService.js (Service - Business logic for cleanup)
const cleanupRepo = require("./cleanupRepo");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CleanupService {
    static async cleanupPastes() {
        try {
            return await cleanupRepo.removeExpiredPastes();
        } catch (error) {
            console.error("Cleanup failed:", error);
            throw error;
        }
    }

    static async stopCleanupJob() {
        await prisma.$disconnect();
        console.log("Prisma disconnected. Cleanup job stopped.");
    }
}

module.exports = CleanupService;
