import React from "react";

import axios from "axios";

async function CustomerGet() {
  console.log("Service call cust get");
 
  
 
let result= await axios.get("http://localhost:3000/lists");
   

 
//   console.log("result");
//   console.log(result.data);
  return result.data;
}

export default CustomerGet;
