const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = arr.reduce((acc, el) => {
  el % 2 == 0 ? acc.push(el) : acc
  return acc
}, []);

console.log(evens);

const votes = [
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
];

const voteObject = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});

console.log(voteObject);

// default parameters
function multiply(x, y = 1) {
  return x * y;
}

console.log(multiply(6));
console.log(multiply(6, 7));

// spread operator
const newArr = [...arr]


// rest operator
const sum = (...nums) => nums.reduce((acc, num) => acc + num)
console.log(sum(1, 2, 3, 4, 4, 5, 6, 7, 78))

// destructuring
// destructuring array values
const people = ["zafar", "adi", "yuhan"]
const [first, second] = people
console.log(first)
console.log(second)

// destructuring objects
const runner = {
  first: "Eluid",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart"
}
const {
  first: firstName,
  last: lastName,
  ...other
} = runner;

console.log(firstName)
console.log(lastName)
console.log(other)