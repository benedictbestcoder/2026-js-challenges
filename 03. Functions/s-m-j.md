Scope, Methods, JSON & Closures 📓

01
Scope — who can see what
Understood ✅
Scope is just about where a variable lives and who can access it. Think of it like rooms in a house. A variable declared in the living room (global) can be seen from any room. But a variable declared in the bathroom (local) stays in the bathroom.
// GLOBAL — accessible everywhere
let appName = "MyApp";

function showApp() {
// LOCAL — only lives inside this function
let version = "1.0";
console.log(appName); // ✅ works — global visible everywhere
console.log(version); // ✅ works — we're inside the function
}

showApp();
console.log(version); // ❌ Error — version doesn't exist out here
The one rule: JS searches for a variable starting where you are, then moves outward until it finds it or gives up with a ReferenceError. This is called the scope chain.
Why developers say "3 types of scope" — it's because of the old var keyword. var ignores block scope (if, for, while) but respects function scope. Since modern JS uses let and const only — both respect all {} blocks — you really only need to think about two things: global and local.
// var — old and broken, AVOID
if (true) {
var age = 20;
}
console.log(age); // ✅ works — var ignores block scope (bad)

// let — modern and correct, USE THIS
if (true) {
let age = 20;
}
console.log(age); // ❌ Error — let respects block scope (good)
02
Methods — functions that live inside objects
Understood ✅
A method is nothing new. It's just a regular function that someone decided to put inside an object. That's the whole story. When you call it, you use a dot — object.method() — the same way you've been calling .length and .indexOf on strings.
// A method defined inside the object
const bankAccount = {
owner: "Chibuzo",
balance: 50000,
isActive: true,
getDetails: function() {
return `${this.owner} has ₦${this.balance}`;
}
};

console.log(bankAccount.getDetails());
The "this" keyword — inside a method, this refers to the object the method belongs to. Whatever is left of the dot when you call the method — that's what this points to. Use this instead of hardcoding the object name so your code doesn't break if the object gets renamed.
You can also define the function outside the object and reference it inside — both approaches work. But the cleaner professional way is to define it directly inside using this.
03
JSON — how apps talk to each other
Understood ✅
JSON is just a way of writing data that both humans and machines can read easily. When your app talks to a server — fetching weather data, user profiles, product lists — the server sends back JSON. You then parse it into a JS object so you can work with it normally.
// Your JS object
const user = {
name: "Chibuzo",
age: 20,
country: "Nigeria",
isPremium: true
};

// Convert to JSON string — to send to a server
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Chibuzo","age":20,"country":"Nigeria","isPremium":true}'

// Parse back to object — to work with received data
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // Chibuzo
console.log(parsed.country); // Nigeria
Real world use: Every API you call sends JSON. Every time you send data to a server you stringify it first. These two methods — stringify and parse — will appear in almost every real project you build.
04
Closures — functions that remember
Takes time to click ⏳
A closure is when an inner function remembers variables from its outer function even after the outer function has finished running. Don't stress about memorising the definition — just understand what it does.
// Outer function — takes a greeting
function createGreeter(greeting) {
// Inner function — takes a name
return function(name) {
console.log(`${greeting} ${name}`);
};
}

// createGreeter runs and returns the inner function
// morningGreeter now holds that inner function
// AND it remembered "Good morning" from the outer function
const morningGreeter = createGreeter("Good morning");

morningGreeter("Chibuzo"); // Good morning Chibuzo
morningGreeter("Rose"); // Good morning Rose

// You can make different greeters from the same factory
const eveningGreeter = createGreeter("Good evening");
eveningGreeter("Chibuzo"); // Good evening Chibuzo
Think of it like a stamp factory. createGreeter is the factory. "Good morning" is what gets stamped on. morningGreeter is the finished stamp. "Chibuzo" is the paper you stamp on. One factory, many different stamps.
Honest note: You don't need to write closures from memory right now. You need to recognise them when you see them. In React, useState is built on closures. Event listeners use closures. They're everywhere — you just won't always know that's what they're called. That's fine. It clicks with time and practice, not with theory.
05
About feeling confused — read this on bad days
If you closed your laptop right now and couldn't write a closure from memory — that is completely normal. Senior developers Google closure syntax. Mid-level developers Google closure syntax. The difference between you and them is not that they memorised everything. It's that they kept going when it felt confusing.
What you need offhand: the concept — "a function that remembers its outer scope"

What you can Google: the exact syntax every single time

What nobody can Google for you: the thinking, the logic, the problem solving — and that's exactly what these sessions are building.
