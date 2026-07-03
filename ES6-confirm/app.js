// Working With spread-operator

const countries = ["USA", "Canada", "Uk"];
const more = ["Japan", "Paris"];

const allcities = [...countries, ...more];

console.log(allcities);

// working with Enhanced Object Literals

const name = "Chibuzo";
const age = 20;
const job = "Developer";

const profile = {
  name,
  age,
  job,
};

console.log(profile);

// working with Default Function Parameters
// i added my own working too by stting username to !bot
function createAccount(username = "bot!", role = "viewer") {
  return `${username}, ${role}`;
}

console.log(createAccount("john", "software-Engineer"));

// here my Default is applied
console.log(createAccount("jane"));
console.log(createAccount("philip"));
console.log(createAccount());

// Working with for...in Loop
const phone = {
  brand: "Samsung",
  model: "S24",
  price: 250000,
  color: "Black",
};

for (const key in phone) {
  console.log(`${key}: ${phone[key]}`);
}
