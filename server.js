require('./models/db');

const DB = 'mongodb+srv://emplloyee-mongodb:test@employeecluster.bnzk5.mongodb.net/employee?retryWrites=true&w=majority';
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
  app.set('view engine', 'hbs');

app.listen(process.env.PORT|| 8080, () => {
    console.log('Express server started at port : 8080');
});

app.use('/employee', employeeController);