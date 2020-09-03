// If statements example

let num = 5;
// odd or even
if (num % 2 !== 0) {
    console.log("Odd number");
} else {
    console.log("even number");
}


// if else if example
let rating = 2;

if (rating === 3) {
    console.log("You are a super star");
} else if (rating === 2) {
    console.log("Meets Expectation");
} else {
    console.log("Needs improvement");
}

// switch statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Not a valid day");
        break;
}

// ternary operator
let age = 12;
isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(isAdult);