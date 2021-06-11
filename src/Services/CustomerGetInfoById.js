import React from "react";

import axios from "axios";

async function CustomerGetInfoById(id) {
  console.log("Service call by id" + id);
 let result = await axios.get(`http://localhost:3000/lists/${id}`);
  console.log("result");
  console.log(result.data);
  return result.data;
}

export default CustomerGetInfoById;
