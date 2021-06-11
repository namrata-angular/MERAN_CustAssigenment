const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/custdata',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
        .then(()=>console.log("database connected"))
        .catch((error)=>console.log(error));

module.exports=mongoose;