<!-- Now — Your Switch vs If-Else Question
Great question. Here's the simple rule:

Use switch when you're checking one variable against exact specific values:

js
// one variable, many exact matches
switch(paymentMethod) → "cash", "card", "transfer"
switch(dayOfWeek) → "Monday", "Tuesday"...
Use if-else when you're checking ranges or complex conditions:

js
// ranges and comparisons
if (score >= 90)
if (age >= 18)
if (price > 1000 && discount === true)
They can sometimes be used interchangeably but following this rule keeps your code clean and readable. -->
