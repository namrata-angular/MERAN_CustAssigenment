const express=require('express');
const app=express();
const fileUpload=require('express-fileupload');
const mongoose=require('./databases/mongoose');
const List=require('./databases/modules/list');
var cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin: *");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept"
    );
    next();
})

//get
app.get('/lists',(req,res)=>{
    List.find({})
        .then(lists => res.send(lists))
        .catch((error)=>console.log(error));
})

//add
app.post('/lists',(req,res)=>{
  console.log("req");
  console.log(req.body)
 //console.log(req.files.profilePicture);

  var pp = req.files.profilePicture;
  pp.mv('public/ping/'+pp.name,function(err){
    if(err){
      res.json({"status":"file not uploaded"})
    }else{
        new List({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          occupation: req.body.occupation,
          dob: "10-5-1996",
          status: req.body.status,
          bio: req.body.bio,
          profilePicture: pp.name,
        })
          .save()
          .then((list) => res.send(list))
          .catch((error) => console.log(error));
    }
  });
  
})


//read one
app.get('/lists/:listId',(req,res)=>{
    List.find({ _id: req.params.listId })
      .then((list) => res.send(list))
      .catch((error) => console.log(error));
})


//update
app.patch("/lists/:listId",(req,res)=>{
    console.log("re");
    console.log(req.body);
    //var pp = req.files.profilePicture;
 // pp.mv('public/ping/'+pp.name,function(err){
  
    List.findOneAndUpdate({'_id': req.params.listId }, {$set: req.body })
      .then((list) => res.send(list))
      .catch((error) => console.log(error));
});

//delete
app.delete("/lists/:listId", (req, res) => {
  List.findByIdAndDelete(req.params.listId )
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
app.listen(3000,()=>console.log("server is connected at 3000"));