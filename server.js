require('./models/db');

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const exphbs = require("express-handlebars");
 const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');



const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine(
    "hbs",
    exphbs({
      extname: "hbs",
      defaultLayout: "mainLayout",
      layoutsDir: __dirname + "/views/layouts/",
      handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
  );
heapp.set('view engine', 'hbs');
var port = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log('Express server started at port : 8080');
});

app.use('/employee', employeeController);