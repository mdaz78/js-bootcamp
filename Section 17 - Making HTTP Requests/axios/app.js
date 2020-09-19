"use strict";

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/?userId=1");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
