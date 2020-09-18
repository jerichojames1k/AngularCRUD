var mongoose = require("mongoose");

var Schema = mongoose.Schema;  
  
var UsersSchema = new Schema({      
 name: { type: String   },       
 address: { type: String   },   
},{ versionKey: false });  
   
var UsersSchema = mongoose.model('user', UsersSchema,'user');  
module.exports =UsersSchema;