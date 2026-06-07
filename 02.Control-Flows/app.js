// Challenge 1 — The Bouncer
// A club only allows people who are 18 and above.
// Store a person's age in a variable. Print whether they are allowed in or turned away.

const age = 14;

if (age >= 18) {
  console.log("let him enter the club");
} else {
  console.log("get outta of here");
}

// Challenge 2 — The Grade Machine A student scored 75 out of 100.
// Write logic that prints their grade based on this:

// 90 and above  → "A"
// 80 - 89       → "B"
// 70 - 79       → "C"
// 60 - 69       → "D"
// below 60      → "F"

const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("c");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Challenge 3 — The Payment Method A checkout system needs to print a message based on how someone is paying. Use a switch statement:

// "cash"   → "Please count your notes carefully"
// "card"   → "Insert or tap your card"
// "transfer" → "Check your bank app for confirmation"
// anything else → "Payment method not recognised"

let paymentmethod = "cash";

switch (paymentmethod) {
  case "cash":
    console.log("Please count your notes carefully");

    break;
  case "card":
    console.log("Insert or tap your card");

    break;
  case "transfer":
    console.log("Check your bank app for confirmation");

    break;
  default:
    console.log("Payment method not recognised");

    break;
}

// Challenge 4 — The Short Decider A user is either logged in or not. Using a ternary operator — one line only — print either:
// "Welcome back!" or "Please log in"

let isLoggedIn = false;
let accessMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(accessMessage);

// Challenge 5 — The Delivery Checker
// An online store delivers only within these states:
// Lagos, Abuja, Kano, Port Harcourt
// Store a customer's state in a variable. Print whether delivery is available or not available in their location.

const customerState = "Uk";

if (
  customerState === "Lagos" ||
  customerState === "Abuja" ||
  customerState === "Kano" ||
  customerState === "Port Harcourt"
) {
  console.log("Delivery is Avaliable");
} else {
  console.log("Delivery is not Avaliable");
}

// Modern Conditional (Iman Musa) - we use" else if" if we have multiple conditions to run.

let hasMembership = false;
let signedIn = true;

if (hasMembership === true) {
  console.log("show user the video ");
} else if (signedIn === true) {
  console.log("tell user to ugrade their Account");
} else {
  console.log("tell user to log in");
}

let userAge = 21;
let hasId = false;
// use the userAge variable inide of the template literals than actually hard coding the age

if (userAge >= 20) {
  console.log(`you're ${userAge} years old, you may enter the club`);
} else if (userAge >= 20 && !hasId) {
  console.log("you just turned 20, Welcome.");
} else {
  console.log(`you're ${userAge} years old, too young, get out of here`);
}

// Falsey Values - is considered false when converted into a boolean (undefined,null,NaN,0,"",false)
// Truthy Values - is considered ftrue when converted into a boolean (numbers,strings thats not empty,empty arrays and objects)
// Note whatever number or value you put inside an if statement is considered a boolean that's(true,false)

// tested truthy and falsey values here:
let newAge = 14;
if (newAge) {
  console.log("your welcome");
}

// Ternary Operator - A shortcut to write if else statement
// hasMembership ? "show video" : "hide video"
const str = userAge >= 21 && hasId ? "you may enter" : "Too young";
console.log(str);

// Exercise
let loggedIn = true;
let isSubscribed = false;

const log = isSubscribed && loggedIn ? "show video" : "don't show video";

console.log(log);
