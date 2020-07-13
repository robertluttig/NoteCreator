const express = require("express");
const path = require("path");


// we are creating an "express" server
const app = express();

// Create a binding to hold the port number. This will be used to set the port
// for the server.
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serving from index.html
app.get("*", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
  });

  // The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });