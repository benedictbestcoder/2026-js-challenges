// ============================================================
// FUNCTIONS.JS — Chibuzo Benedict
// Topics: Function declarations, arrow functions, parameters,
//         return values, default params, rest params,
//         objects & arrays as arguments
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1 — FUNCTION DECLARATIONS (Basic)
// ─────────────────────────────────────────────────────────────

// A function declaration is the classic way to write a function.
// Parameters are the placeholders. Arguments are the real values passed in.
// The order of params must match the order of arguments.

function sayHello(name) {
  console.log(`Welcome, ${name}`);
}

sayHello("Benedict");
sayHello("Rose");
sayHello("Ben");

// A function with two parameters — order matters
function greetings(time, name) {
  console.log(`Good ${time}, ${name}`);
}

greetings("Evening", "James");
greetings("Evening", "Prosper");
greetings("Evening", "Philip");

// ─────────────────────────────────────────────────────────────
// SECTION 2 — RETURN KEYWORD
// ─────────────────────────────────────────────────────────────

// "return" sends a value back out of the function so you can use it elsewhere.
// Without return, the function does its job but gives nothing back.

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 15)); // 25
console.log(add(12, 45)); // 57

// ─────────────────────────────────────────────────────────────
// SECTION 3 — CHALLENGE SOLUTIONS
// ─────────────────────────────────────────────────────────────

// Challenge 1 — The Greeter
// A function that takes a name and returns a personalised greeting

function greetUser(name) {
  return `Hello ${name}, welcome! Great to have you here.`;
}

const greeting = greetUser("Chibuzo");
console.log(greeting);

// Challenge 2 — The Bill Splitter
// Takes total bill and number of people, returns each person's share

function splitBill(amount, people) {
  return amount / people;
}

console.log(`Each person pays: ₦${splitBill(15000, 5)}`); // ₦3000

// Challenge 3 — The Password Checker
// Checks if password is at least 8 characters long

function checkPassword(password) {
  if (password.length >= 8) {
    return "Password is strong";
  } else {
    return "Password is too short";
  }
}

console.log(checkPassword("abc123")); // too short
console.log(checkPassword("mypassword1")); // strong

// Challenge 4 — The Cart Counter
// Takes an array and returns how many items are in it

const cart = ["shoes", "bag", "watch", "belt", "perfume"];

function countCart(cartItems) {
  return `You have ${cartItems.length} items in your cart`;
}

console.log(countCart(cart));

// Challenge 5 — The Profile Printer
// Takes an object and prints each detail with a label

const user = {
  name: "Chibuzo",
  age: 20,
  occupation: "Developer",
  isStudent: false,
};

function printProfile(person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Occupation: ${person.occupation}`);
  console.log(`Is Student: ${person.isStudent}`);
}

printProfile(user);

// ─────────────────────────────────────────────────────────────
// SECTION 4 — CURRENCY CONVERTERS (Real world practice)
// ─────────────────────────────────────────────────────────────

// USD to AUD converter
// Rule: AUD = USD * 1.5

function convertUsdToAud(dollars) {
  return dollars * 1.5;
}

console.log(convertUsdToAud(1000)); // 1500
console.log(convertUsdToAud(500)); // 750
console.log(convertUsdToAud(200)); // 300

// Naira to USD converter (cleaner version — implicit return)
function convertNairaToUsd(naira) {
  return naira * 2;
}

console.log(convertNairaToUsd(2000)); // 4000

// ─────────────────────────────────────────────────────────────
// SECTION 5 — ARROW FUNCTIONS
// ─────────────────────────────────────────────────────────────

// Arrow functions are the modern, shorter way to write functions.
// This is the style you will use most in React.

// Regular arrow function
const convertPoundsToUsd = (pounds) => {
  return pounds * 1.27;
};

console.log(convertPoundsToUsd(2300));

// One-liner arrow function (implicit return)
// When a function just returns one thing — no curly braces needed
const doubleNumber = (num) => num * 2;
const squareNumber = (num) => num * num;

console.log(doubleNumber(5)); // 10
console.log(squareNumber(4)); // 16

// ─────────────────────────────────────────────────────────────
// SECTION 6 — DEFAULT PARAMETERS
// ─────────────────────────────────────────────────────────────

// Default params kick in when no argument is passed in.
// Very useful for optional values like usernames.

const registerUser = (user = "Bot") => {
  return `${user} is registered`;
};

console.log(registerUser("John")); // John is registered
console.log(registerUser("Calvin")); // Calvin is registered
console.log(registerUser()); // Bot is registered (default used)

const hasId = (membership = "false") => {
  return `${membership} — user has membership`;
};

console.log(hasId("true")); // true — user has membership
console.log(hasId()); // false — user has membership (default)

// ─────────────────────────────────────────────────────────────
// SECTION 7 — REST PARAMETERS (...spread)
// ─────────────────────────────────────────────────────────────

// Rest params (...) let a function accept any number of arguments.
// They come in as an array inside the function.
// You will use this in React and real apps constantly.

// Example 1 — sum any amount of numbers
const sum = (...numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(12, 45, 67, 89)); // 213

// Example 2 — pick a random item from any list passed in
const getRandom = (...arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

console.log(getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ─────────────────────────────────────────────────────────────
// SECTION 8 — OBJECTS AS ARGUMENTS
// ─────────────────────────────────────────────────────────────

// In real apps you almost never pass simple values into functions.
// You pass objects — just like React passes "props" (which are objects).

const loginUser = (user) => {
  return `The user ${user.name} with ID ${user.id} is logged in`;
};

const loggedInUser = {
  name: "John",
  id: 1,
};

console.log(loginUser(loggedInUser));

// You can also pass the object directly without a variable
console.log(loginUser({ id: 2, name: "Alex" }));

// ─────────────────────────────────────────────────────────────
// KEY RULES TO REMEMBER
// ─────────────────────────────────────────────────────────────

// 1. Params are placeholders. Arguments are real values.
// 2. Order of params must match order of arguments.
// 3. return sends a value back — without it the function returns undefined.
// 4. Arrow functions with one return line don't need curly braces.
// 5. Default params kick in only when no argument is passed.
// 6. Rest params (...) collect all arguments into an array.
// 7. Objects as arguments = how React props work.
