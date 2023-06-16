// Require the Express package and assign it to a variable.
const express = require("express");
// Require the Morgan package and assign it to a variable.
const morgan = require("morgan");

// The Express package exports a function. When you invoke that function, you get a new Express application and assign it to a variable.
const app = express();

// Initial Middleware to respond 
const sayHello = (req, res, next) => {
    // The .send function sends the response through the server.
    res.send("Hello!");
};

// Call morgan & sayHello to return to the user.
app.use(morgan("dev"));
app.use(sayHello);

// Export the Express application to be used in the server.js file.
module.exports = app;