const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
// const axios = require("axios");

// Configure body parser for handling form submission
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets on app production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petFinder");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

