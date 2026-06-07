// Challenge 1 — Meet Yourself
// Create variables that store your name, age, and whether you are a student or not. Then print a sentence using all three variables.

let name = "chibuzo benedict";
let age = 20;
let isStudent = true;

console.log(
  `Hi, my name is ${name}, I am ${age} years old, and I am a student: ${isStudent}.`,
);

// Challenge 2 — The Receipt
// A shop item costs 1500. A customer pays 2000.
// Store both values in variables and calculate the change. Print the result in a clear sentence.
let itemcost = 1500;
let amountpaid = 2000;
let change = amountpaid - itemcost;

console.log(`the customer's change is  ${change}`);

// Challenge 3 — What Type Is This?
// You have these four values:
// "25"    25    true    null
// Use typeof to check and print the type of each one. Then look at the results — do any of them surprise you?

const alpha = "25";
console.log(alpha, typeof alpha);

const num3 = 25;
console.log(num3, typeof num3);

const isAdmin = false;
console.log(isAdmin, typeof isAdmin);

const grocery = null;
console.log(grocery, typeof grocery);

// Challenge 4 — The Broken Profile
// Create a user profile with these details:
// name: "Amina"
// age: 22
// city: undefined
// isLoggedIn: false
// Print each one with a label. Example: "Name: Amina"

// i think am turning the below to a json file

// formr error what i did
// ("Name:Amina");
// ("Age:22");
// ("City:undefined");
// ("IsLoggedIn:false");

let username = "Amina";
let userage = 22;
let city = undefined;
let isLoggedIn = false;

console.log(`Name: ${username}`);
console.log(`Age: ${userage}`);
console.log(`City: ${city}`);
console.log(`Is Logged In: ${isLoggedIn}`);

// Challenge 5 — String Detective
// Store this sentence in a variable:
// "JavaScript is fun to learn"
// Then find and print:

// The total number of characters
// The word "fun" — what position does it start at?

const js = "JavaScript is fun to learn";
console.log(js.length);
// console.log(js.slice(13, 17));- this breaks the moment the sentence changes(manual counting and hardcoding)
console.log(js.indexOf("fun")); // returns 14 — the exact position use it to get where an actual word is incase the sentence changes

// for loop
// for (let i = 0; i < 60; i++) {
//   // console.log(i + 1);
//   console.log(i);
// }

// const customerState = "Uk";

// if (
//   customerState === "Lagos" ||
//   customerState === "Abuja" ||
//   customerState === "Kano" ||
//   customerState === "Port Harcourt"
// ) {
//   console.log("Delivery is Avaliable");
// } else {
//   console.log("Delivery is not Avaliable");
// }

//  for this exercise i will use data types,loops,conditionals.
// we can use a "%" symbol to tell whether a no is odd or even.
// by default every even no is going to be perfectly divisible by 2
// so this is it 10 % 2 === 0 (true) this returns zero.

// for (let i = 1; i <= 15; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log(`${i} Asap`);
//   }

//   if (i & (1 === 1)) {
//     console.log(`${i} Frontend`);
//   } else {
//     console.log(`${10 / 5} Asap Frontend`);
//   }
// }

// this gives us all the odd no's thats not divisible by 2
// for (let i = 1; i <= 15; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// // this gives us all the odd no's
// for (let i = 1; i <= 15; i++) {
//   if (i % 0) {
//     console.log(i);
//   }
// }

// if the no we are looping through is divisble by 2 then consle log "Frontend" else if console log "Asap" for odd
// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0) {
//     console.log(`${i} Asap Frontend`);
//   } else if (i % 2 === 0) {
//     console.log(`${i} - Asap (Even)`);
//   } else {
//     console.log(`${i} - Frontend (Odd)`);
//   }
// }

for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - Asap (Even)`);
  } else if (i % 2) {
    console.log(`${i} - Frontend (Odd)`);
  } else {
    console.log(`${i} Asap Frontend`);
  }
}

//  Print out all the characters from the string: "Asap Frontend"
// this is a dynamic for loop

let str = "Asap Frontend";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
