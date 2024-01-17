const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const hbs= require("hbs");
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo-app'); //, { useNewUrlParser: true, useUnifiedTopology: true }
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Configure Handlebars
// app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Configure middleware, routes, and other setup
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const todoRoutes = require('./routes/todo');

// Use routes
app.use('/', indexRoutes);
app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
