const express = require("express");
const path = require("path");
// const setupApiRoutes = require("./routes/apiRoutes");
// const setupHtmlRoutes = require("./routes/htmlRoutes");


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
 

// Serving from index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });


// The code below points the server to a series of "route" files.
// setupApiRoutes(app);
// setupHtmlRoutes(app);

  // The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });

