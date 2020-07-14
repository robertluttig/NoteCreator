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

// setup up routes to all files in public using the path relative to the
// public directory.
app.use(express.static("public"));
 
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// Serving from index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

// app.use('/index.html', express.static(path.join(__dirname, '/index.html')))
// app.use('/notes.html', express.static(path.join(__dirname, '/notes.html')))

  // The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });

