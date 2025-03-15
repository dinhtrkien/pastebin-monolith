// src/domain/paste/pasteController.js
const pasteService = require("./PasteService");

module.exports = {
  showCreatePastePage(req, res) {
    // Renders the create paste form
    res.render("createPasteView");
  },

  async createPaste(req, res) {
    try {
      const { content, expirationTime } = req.body; 
      const newPaste = await pasteService.createPaste(content, expirationTime ? new Date(expirationTime) : null);
      // Redirect to the detail page
      res.redirect(`/paste/${newPaste.slug}`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating paste");
    }
  },

  async showDetailPage(req, res) {
    try {
      const { slug } = req.params;
      const paste = await pasteService.getPaste(slug);

      if (!paste) {
        return res.status(404).send("Paste not found or expired");
      }

      res.render("detailPasteView", { paste });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving paste");
    }
  }
};
