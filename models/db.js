require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
