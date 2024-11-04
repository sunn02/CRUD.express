const express = require('express');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const route = require('./routes/route');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'));

app.use("/topics", route);

app.listen(PORT, console.log('Server is running on port: ' + PORT));