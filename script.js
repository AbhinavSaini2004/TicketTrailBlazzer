// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('views/login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });
// const express = require('express');
// const app = express();

// // Set the view engine to EJS
// app.set('view engine', 'ejs');

// // Define the route for the login page
// app.get('views/login.ejs', (req, res) => {
//     res.render('views/login.ejs'); // This renders the login.ejs file
// });

// // Start the server
// app.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });
// Client-side JavaScript
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('views/login'); // Correct the ID to match your HTML element

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Server-side JavaScript (Express)
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define the route for the login page
app.get('http://localhost:5000/login', (req, res) => {
    console.log(req);
    res.render('login'); // Renders the login.ejs file automatically from the 'views' folder
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
