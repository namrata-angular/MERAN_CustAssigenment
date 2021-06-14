import React from "react";

import axios from "axios";

async function CustomerEdit(data,id) {
  console.log("data");
  console.log(data);
  console.log(data.ProfilePicture[0]);
  console.log("Service call edit" + id);

  var fd = new FormData();
  fd.append("firstName", data.firstName);
  fd.append("lastName", data.lastName);
  fd.append("occupation", data.occupation);
  fd.append("status", data.status);
  fd.append("dob", "10-05-1996");
  fd.append("profilePicture", data.ProfilePicture[0]);
  fetch(`http://localhost:3000/lists/${id}`, {
    method: "PATCH",
    body: fd,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default CustomerEdit;
