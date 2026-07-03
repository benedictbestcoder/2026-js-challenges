// Challenge 1 — The Bank Account

// Create an object called bankAccount with these properties:
// owner: "Chibuzo"
// balance: 50000
// isActive: true
// Add a "method" called getDetails that returns a sentence showing all three details. Call it and print the result.

const bankAccount = {
  owner: "Chibuzo",
  balance: 50000,
  isActive: true,
  getDetails,
};
// use "this" / reference the object name

function getDetails() {
  return `the user ${this.owner} with the balance of ${this.balance} has an account which is ${this.isActive}`;
}

console.log(bankAccount.getDetails());

// Challenge 2 — The Scope Detective

// Create a global variable called appName with value "MyApp". Then write a function called showApp that:

// Creates a local variable called version with value "1.0"
// Prints both appName and version inside the function

// After calling the function try to print version outside it and see what happens. Write a comment explaining why.

const appName = "myApp";

function showApp() {
  let version = "1.0";
  console.log(appName);
  // console.log(version);
}

showApp();

// console.log(version); // well at the console it logged version not defined, now what js does is that it checks for a variable called "version" at the global scope if it doesnot see it, it returns undefined meaning the variable was never declared at the first place meanwhile it was stored inside of a function

// Challenge 3 — The User Card

// Create an object called userCard with:
// name, age, country, isPremium
// Convert it to JSON using JSON.stringify and print it. Then parse it back using JSON.parse and print just the name and country.

const userCard = {
  name: "Chibuzo",
  age: 20,
  country: "Nigeria",
  isPremium: true,
};

// convert to json string
const jsonStr = JSON.stringify(userCard);
console.log(jsonStr);

// convert back to object
const jsonParsed = JSON.parse(jsonStr);

console.log(jsonParsed);

// here i printed my name and country
console.log(jsonParsed.name);
console.log(jsonParsed.country);

// Challenge 4 — The Discount Calculator

// Create an object called product with:
// name: "Laptop"
// price: 450000
// discount: 10
// Add a method called getFinalPrice that calculates and returns the price after discount. Print the result like:
// "Laptop costs ₦405000 after discount"

const product = {
  name: "Laptop",
  price: 450000,
  discount: 10,
  getFinalPrice,
};

function getFinalPrice() {
  const finalPrice = this.price - (this.price * this.discount) / 100;

  return `${this.name} costs N${finalPrice} after discount`;
}

console.log(product.getFinalPrice());

// Challenge 5 — The Greeter Machine

// Write a function called createGreeter that takes a greeting parameter. Inside it return another function that takes a name and prints:
// "Good morning Chibuzo" // if greeting was "Good morning"

function createGreeter(greetings) {
  // outer function takes greeting
  return function (name) {
    // inner function takes name

    console.log(`${greetings}: ${name}`);
  };
}

const morningGreeter = createGreeter("Good morning");
// morningGreeter is now the inner function

morningGreeter("Chibuzo");
// now it runs with the name
