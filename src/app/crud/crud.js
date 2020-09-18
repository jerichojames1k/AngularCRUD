var express = require('express'); 
const app = express(); 
const model = require('../userSchema.js')

//INSERT DATA
app.post("/SaveUser",function(req,res){   
    var mod = new model(req.body); 
       mod.save(function(err,data){ 
          if(err){  
             res.send(err);                
          }  
         else{        
             res.send({data:"Record has been Inserted..!!"});  
         }    
       }); 
    })  
 //UPDATE DATA
    app.put("/updateUser",function(req,res){    
        model.findByIdAndUpdate({_id: req.body.id ,name: req.body.name, address: req.body.address},  
          function(err,data) {  
          if (err) {  
          res.send(err);         
          }  
          else{        
                 res.send({data:"Record has been Updated..!!"});  
            }  
        });     
    })  
    
//DELETE DATA
    app.post("/deleteUser/:id",function(req,res){      
       model.deleteOne({ _id: req.body.id }, function(err) {    
        if(err){    
            res.send(err);    
        }    
        else{      
               res.send({data:"Record has been Deleted..!!"});               
           }    
    });   
      })  
     
//GET DATA
    app.get("/getUser",function(req,res){  
       model.find({},function(err,data){  
                 if(err){  
                     res.send(err);  
                 }  
                 else{                
                     res.send(data);  
                     }  
             });  
     })

module.exports=app;