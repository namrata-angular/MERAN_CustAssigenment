import React from "react";

import axios from "axios";

async function CustomerDelete(id) {
  console.log("Service call delete"+id);
  
  // const article = {firstName: "React Hooks POST Request Example" };
  axios.delete(`http://localhost:3000/lists/${id}`).then((response) => {
    console.log(response);
    console.log(response.data);
  });

 
}

export default CustomerDelete;
