// should i thinkof a foreach like washing a stack of dishes
// and not returning them back where they belong like "inside of an
// array", but "map" returns our plates to our array where it was officially

// Working with forEach-Helper

// Challenge 1 — forEach
// Print every student's name and grade like:"Chibuzo scored 85"

const students = [
  { name: "Chibuzo", grade: 85, passed: true },
  { name: "Rose", grade: 45, passed: false },
  { name: "James", grade: 72, passed: true },
  { name: "Amina", grade: 30, passed: false },
  { name: "Calvin", grade: 91, passed: true },
];

// Using forEach to log student names
students.forEach((student) => {
  console.log(`${student.name} scored ${student.grade}`);
});

// copied this line of code somewhere to get the syntax of this filter its quiet tricky
// console.log(computers.filter((com) => com.ram > 16));

// Working with filter

// Challenge 2 — filter
// Create a new array of only students who passed. Print it.

console.log(students.filter((stud) => stud.passed === true));

// working with map

// Challenge 3 — map
// Create a new array of just the student names. Print it.

const results = students.map((stu) => {
  return stu.name;
});

console.log(results);

// used this code to get the syntax of how to use the "map"
// const results = peoples.map((person) => {
//   return [person.firstName, person.lastName];
// });

// console.log(results);

// Working with map + filter combined

// Challenge 4 — map + filter combined
// Filter only passed students first. Then map to get just their names. Print the result.
console.log(
  students.filter((stud) => stud.passed === true).map((stud) => stud.name),
);
