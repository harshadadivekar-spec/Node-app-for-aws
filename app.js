// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // res.send('Hello Express!');
//     res.sendFile(__dirname+"/index.html")
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My Node.js Application</h1>
        <p>This application is running successfully.</p>
        <a href="/about">About Us</a>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send(`
        <h2>About Page</h2>
        <p>This is a sample Express application.</p>
        <a href="/">Go Back</a>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});