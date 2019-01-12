var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
//var pi = require("paraminput");
  
var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
var UsersSchema = new Schema({      
 name: { type: String   },       
 address: { type: String   },   
 mobno: { type: String   },
},{ versionKey: false });  
   
  
var model = mongo.model('users1', UsersSchema, 'users1');  
  
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been anglkjlf ldkInserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address, mobno: req.body.mobno},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
            console.log(req.params.chk);
          res.send({data:"Record has beenxfgnhhhdfh Updated..!!"});  
     }  
 });  
  
  
}  
 })  
  
 app.post("/api/deleteUser",function(req,res){          
    model.remove({ name: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
         console.log("this is error on deelte");
     }    
     else{      
           // console.log("server js delet _id"+ _id);
            console.log("server js delete arg id "+ req.body.id);
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  
  
//    app.get("/api/searchUser1/",function(req,res){  
//     //   alert("this is serverjs. findone entry");
//       console.log("this is server js findone");
//     model.findOne({'name':'45'},function(err,data){  
//               if(err){  
//                   res.send(err);  
//                   console.log("if");
//               }  
//               else{                
                  
//                   res.send(data);  
//                   console.log("else");
//                  // console.log("parat :" + Request.params)
//                   //console.log(req.params.data);
//                   //console.log(req.params.id);
//                   //console.log(req.json);
//                   console.log(data);

//                   }  
//           });  
//   }) 
app.get('/api/sUser1/:pi',function(req,res){  
    console.log("server js suser");
    console.log("star :"+req.query.mobno);
    //console.log("star2 :"+req.query.myParams.mobno);
    console.log("star 3:"+req.options);
    console.log("star 4:"+req.query.options);
    model.find({'mobno':req.params.id},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send({data:'mobile no is '});  

                  console.log("param :"+req.params.pi);
                  //console.log("param array :"+ req.params.id[1]);
                  //console.log("parm val"+req.params.id.name);
                  //console.log("prara test : "+ req.params.id(1))
                  //console.log("2 param : " + req.params.mbno);
                  console.log("objec tinp  :" + req.params.pi.id);
                  console.log("obect inpu 2 : " + req.params.pi.mbno);
                  //console.log("para aeieu : "+ req.query.mobno)

                  }  
          });  
  })  
  
 app.get("/api/getUser1/",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  