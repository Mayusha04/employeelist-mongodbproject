
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') }
//     else { console.log('Error in DB connection : ' + err) }
// });
 
const DB = 'mongodb+srv://emplloyee-mongodb:test@employeecluster.bnzk5.mongodb.net/employee?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));


require('./employee.model');