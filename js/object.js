const person = {
  name: 'John',
  age: 30,
  city: 'New York'
}

// const student = {
//   name: 'Alice',
//   age: 20,
//   grade: 'A',
//   course: ["HTML", "CSS", "JS", "Python"],
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     country: 'USA'
//   }
// }

const student = {
  name: "Mjesty",
  age: 40,
  courses: ["HTML", "CSS", "JS", "Python"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
}

// Accessing value in an object
// Dot notation
console.log(student.name);
console.log(student.age);
console.log(student.courses);
console.log(student.address);

// Bracket notation
console.log(student['name']);
console.log(student['age']);
console.log(student['grade']);

