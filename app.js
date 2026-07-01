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
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My Application</h1>
         <h2>Welcome to Node Js App</h2>
    <h2>Welcome to my app</h2>
    <h2>Its my first project in aws </h2>
    <h2>Its my first project  </h2>
        <p>This application is deployed using AWS services.</p>
        <a href="https://your-s3-bucket-name.s3.amazonaws.com/index.html">
            View Static Website
        </a>
    `);
});

app.get('/about', (req, res) => {
    res.send('This application is running on AWS.');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});