// XMLHttpRequests
"use strict";

const req = new XMLHttpRequest();

req.addEventListener("load", () => {
  console.log("REQUEST loaded successfully");
  const data = JSON.parse(req.responseText);
  console.log(data);
});

req.addEventListener("error", () => {
  console.error("ERROR loading!");
});

req.open("GET", "https://jsonplaceholder.typicode.com/todos");
req.send();

console.log("REQUEST sent");
