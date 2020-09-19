"use strict";

const URL = "https://jsonplaceholder.typicode.com";

fetch(`${URL}/todos/`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.error("200 STATUS NOT RECEIVED");
    }
  })
  .then((posts) => {
    for (const post of posts) {
      console.log(post.title);
    }
    const post = posts[0];
    return fetch(`${URL}/users/${post.userId}`);
  })
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.error(err));
