// Require the Express package and assign it to a variable.
const express = require("express");
// Require the Morgan package and assign it to a variable.
const morgan = require("morgan");

// The Express package exports a function. When you invoke that function, you get a new Express application and assign it to a variable.
const app = express();

// Initial Middleware to respond
const sayHello = (req, res) => {
    // Log the query parameters received in the request
    console.log(req.query);

    // Retrieve the value of the 'name' parameter from the query
    const name = req.query.name;

    // Construct the greeting content based on the presence of the 'name' parameter
    const content = name ? `Hello, ${name}!` : 'Hello!';

    // Send the content as the response to the client
    res.send(content);
};

const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const content =  `${greeting}!`;
    res.send(content);
}

// Call app.morgan(dev) to return logs to console.
app.use(morgan("dev"));

// ---------- GET REQUESTS ---------- 

/* When a client makes a GET request to "/hello" on the Express server, the sayHello function will be invoked, 
allowing you to define the logic for handling that specific request. */
app.get('/hello', sayHello);
app.get('/say/:greeting', saySomething);

app.get('/songs', (req, res) => {
    const title = req.query.title;
    res.send(title);
});



// Export the Express application to be used in the server.js file.
module.exports = app;