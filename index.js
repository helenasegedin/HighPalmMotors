const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars configuration
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static('public'));

// Use routes
app.use('/', require('./controllers/web'));
app.use('/api', require('./controllers/api'));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});