// dependencies
const express = require('express');

// initialize express server
const app = express();

// set the port
const PORT = process.env.PORT || 3000;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the routes
// NOTE: order matters
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// start the server
app.listen(PORT, () => {
    console.log('server started');
})