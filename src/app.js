// Require the Express package and assign it to a variable.
const express = require("express");
// The Express package exports a function. When you invoke that function, you get a new Express application and assign it to a variable.
const app = express();

// Initial Middleware to respond 
const sayHello = (req, res, next) => {
    // The .send function sends the response through the server.
    res.send("Hello!");
};
// Middleware that only contains logs.
const logging = (req, res, next) => {
    console.log("A request has been made!");

    // The next() function tells the Middleware to move on to the next Middleware.
    next();
};

// Return results to the user.
// The .use function returns the output back to the user.
app.use(logging);
app.use(sayHello);

// Export the Express application to be used in the server.js file.
module.exports = app;