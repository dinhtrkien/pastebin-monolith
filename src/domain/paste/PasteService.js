// Service for Paste domain
const pasteRepo = require("./pasteRepo.js");

// Generate a short random slug (6 chars). You can replace with any short-URL library.
function generateSlug() {
  return Math.random().toString(36).substr(2, 6);
}

module.exports = {
  async createPaste(content, expirationTime) {
    const slug = generateSlug();
    return pasteRepo.createPaste(slug, content, expirationTime);
  },

  async getPaste(slug) {
    const paste = await pasteRepo.findPasteBySlug(slug);
    if (!paste) return null;

    // Check expiration
    if (paste.expirationTime && paste.expirationTime < new Date()) {
      return null;
    }

    // Increment views
    await pasteRepo.incrementViews(slug);
    paste.viewsCount += 1; // update local copy
    return paste;
  }
};
