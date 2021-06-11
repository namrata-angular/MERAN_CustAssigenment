const mongoose =require('mongoose');

const ListSchema = new mongoose.Schema({

  firstName: {
    type: String,
    trim: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
  },
  occupation: {
    type: String,
    trim: true,
    minlength: 3,
  },
  dob: {
    type: String,
    trim: true,
    minlength: 3,
  },
  status: {
    type: String,
    trim: true,
    minlength: 3,
  },
   status: {
    type: String,
    trim: true,
    minlength: 3,
  },
  bio: {
    type: String,
    trim: true,
    minlength: 3,
  },
  profilePicture: {
    type: String,
    trim: true,
    minlength: 3,
  },
});

const List=mongoose.model('List',ListSchema);

module.exports=List;