const express = require('express');
const ejs = require('ejs');
const { route } = require('./routes/route');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", route);

app.listen(PORT, console.log('Server is running on port: ' + PORT));