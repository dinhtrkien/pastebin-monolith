// Service for Paste domain
const pasteRepo = require("./pasteRepo");

// Generate a short random slug (6 chars). You can replace with any short-URL library.
function generateSlug() {
  return Math.random().toString(36).substr(2, 6);
}

module.exports = {
  async createPaste(content, expirationTime) {
    const slug = generateSlug();
    const paste = await pasteRepo.createPaste(slug, content, expirationTime);
    return paste;
  },

  async getPaste(slug) {
    const paste = await pasteRepo.findPasteBySlug(slug);
    if (!paste) return null;
    
    // Check if paste is expired (maybe dont delete it, just mark as expired)
    // Implement a cron job to delete expired pastes periodically (Done in cleanupService.js)
    if (paste.expirationTime && new Date() > new Date(paste.expirationTime)) {
      // await pasteRepo.deletePaste(slug); // bad practice
      return null;
    }

    // Increment views
    await pasteRepo.incrementViews(slug);
    paste.viewsCount += 1; // update local copy
    
    return paste;
  }
};