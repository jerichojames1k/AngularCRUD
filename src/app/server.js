var express = require('express'); 
const app = express(); 
const cors=require('cors');
require('dotenv').config();
var path = require("path");   
var bodyParser = require('body-parser');  
var mongoose = require("mongoose");
const crud = require('./crud/crud.js')

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true); 

const uri = "mongodb+srv://jay2x:FACEBOOK@cluster0.qruxj.mongodb.net/AngularCRUD?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
}).then(() => {
  console.log("Connected to MongoDB!")
}).catch(err => {
  console.log(err)
})

/*Connection on localhost only*/
//  mongoose.connect('mongodb://localhost:27017/AngularCRUD', {
//    useNewUrlParser: true,       
//    useUnifiedTopology: true,
//    useFindAndModify:false
//  })
//   .then(() => console.log("ahh hurot akong bilib uy, IT'S A PRANK"))
//   .catch(err => console.error('Something went wrong', err));

app.use(cors());
app.use(express.json());
app.use(crud);

app.listen(8080, function () {   
 console.log('Example app listening on port 8080!')  
})  



