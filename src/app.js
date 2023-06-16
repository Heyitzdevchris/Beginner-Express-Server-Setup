// Import the Express framework
const express = require("express");
// Import the Morgan middleware for logging
const morgan = require("morgan");
// Create an Express application instance
const app = express();
// Application-level middleware: Use Morgan for logging in dev mode
app.use(morgan("dev"));

// Define route functions

// Route function for handling the "/hello" endpoint
const sayHello = (req, res, next) => {
  // Retrieve the value of the 'name' query parameter
  const name = req.query.name;

  // Construct the greeting content based on the presence of the 'name' parameter
  const content = name ? `Hello, ${name}!` : "Hello!";
  
  // Send the greeting content as the response
  res.send(content);
};

// Route function for handling the "/say/goodbye" endpoint
const sayGoodbye = (req, res, next) => {
  // Send a fixed response for saying goodbye
  res.send("Sorry to see you go!");
};

// Route function for handling the "/say/:greeting" endpoint
const saySomething = (req, res, next) => {
  // Retrieve the value of the 'greeting' parameter from the URL path
  const greeting = req.params.greeting;

  // Retrieve the value of the 'name' query parameter
  const name = req.query.name;

  // Construct the greeting content based on the presence of 'greeting' and 'name' parameters
  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  
  // Send the greeting content as the response
  res.send(content);
};

// Define the routes and associate them with the corresponding route functions

// Route for the "/hello" endpoint, handled by the sayHello function
app.get("/hello", sayHello);

// Route for the "/say/goodbye" endpoint, handled by the sayGoodbye function
app.get("/say/goodbye", sayGoodbye);

// Route for the "/say/:greeting" endpoint, handled by the saySomething function
app.get("/say/:greeting", saySomething);

// Export the Express application instance
module.exports = app;
