// Server setup and start
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');

// Import route files
const pasteRoutes = require('./interfaces/routes/pasteRoutes');
// const analyticsRoutes = require('./interfaces/routes/analyticsRoutes');

// Routes setup
app.use("/", pasteRoutes);
// app.use("/analytics", analyticsRoutes);

// EJS setup
app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "domain/paste"), 
  path.join(__dirname, "domain/analytics") 
]);

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static("public")); // serve static files if needed

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Monolithic app listening on port ${PORT}`);
});