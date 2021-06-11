import React from "react";

import axios from "axios";

async function CustomerAdd(data) {
 
  console.log("Service call ");
  console.log("data"+data);
   console.log(data);
   console.log("data.ProfilePicture.files[0]");
   console.log(data.ProfilePicture[0]);
  // console.log(data.profilePicture[0]);
  //  const article = { title: "React Hooks POST Request Example" };
  // axios.post(`http://localhost:3000/lists`, article).then((res) => {
  // console.log(res);
  // console.log(res.data);
  // });

 // const article = {firstName: "React Hooks POST Request Example" };
 var fd=new FormData();
  fd.append("firstName",data.firstName);
  fd.append("lastName", data.lastName);
  fd.append("occupation", data.occupation);
  fd.append("status", data.status);
  fd.append("dob", "10-05-1996");
  fd.append("profilePicture", data.ProfilePicture[0]);
  // axios.post("http://localhost:3000/lists", fd).then((response) => {
  //   console.log(response);
  //   console.log(response.data);
  // });

  // headers.append("Origin", "http://localhost:3000");
  fetch("http://localhost:3000/lists",{
    method:'POST',
    body:fd
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  // let result = await fetch("http://localhost:3000/lists", {
  //   method: "GET",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     // 'Authorization': 'Basic cnpwX2xpdmVfNFdZYXJlTms1dXl5OHI6UFBDZjhFd2lnMWVtd0d1MDVUV205S2Np',
  //     // 'Content-Type': 'text/plain'
  //   },

  //   // body: JSON.stringify({
  //   //     "amount": amount*100,
  //   //     "currency": currency
  //   // })
  // });
}

export default CustomerAdd;
