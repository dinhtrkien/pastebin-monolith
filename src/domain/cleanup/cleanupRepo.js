// cleanupRepo.js (Repository - Handles database interactions)
const prismaClient = require("../../../prisma/prismaClient.js");

class CleanupRepo {
    static async removeExpiredPastes() {
        try {
            const deletedPastes = await prisma.paste.deleteMany({
                where: {
                    expirationTime: { lt: new Date() }, // Deletes pastes where expiresAt < NOW()
                },
            });
            return deletedPastes.count; // Return number of deleted records
        } catch (error) {
            console.error("Error deleting expired pastes:", error);
            throw error;
        }
    }
}

module.exports = CleanupRepo;
