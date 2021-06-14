import React from "react";

import axios from "axios";

async function CustomerAdd(data) {
 
  console.log("Service call ");
  console.log("data"+data);
   console.log(data);
   console.log("data.ProfilePicture.files[0]");
   console.log(data.ProfilePicture[0]);
 
 var fd=new FormData();
  fd.append("firstName",data.firstName);
  fd.append("lastName", data.lastName);
  fd.append("occupation", data.occupation);
  fd.append("status", data.status);
  fd.append("bio", data.bio);
  fd.append("dob", "10-05-1996");
  
  fd.append("profilePicture", data.ProfilePicture[0]);
  fetch("http://localhost:3000/lists",{
    method:'POST',
    body:fd
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

    return true;
 
}

export default CustomerAdd;
