// creating a promise
// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
//
// willGetYouADog.then(() => {
//   console.log("Yay we got a dog!!!!");
// }).catch(() => {
//   console.log("No Dog!!! Sad!")
// })

const willGetYouADog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

willGetYouADog()
  .then(() => {
    console.log("Yay we got a dog!!!!");
  })
  .catch(() => {
    console.log("No Dog!!! Sad!");
  });

// resolving or rejecting with values
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Omar" },
          { id: 5, username: "Zafar" },
        ],
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("STATUS: ", res.status);
    console.log("DATA: ", res.data);
    console.log("REQUEST WORKED");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
