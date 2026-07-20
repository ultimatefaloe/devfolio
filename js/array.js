console.log("============================")
console.log("====Working With Array====")
console.log("============================")

const courses = ["HTML", "CSS", "JS", "React", "Node"];
// const person = [
//   { name: "frank", age: 30 },
//   { name: "obed", age: 25 },
// ];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const heter = [ 'frank', 30, true, null, undefined, { name: "obed" }, [1, 2, 3] ];


// console.log(courses[0])
// console.log(courses.length) // Node
// console.log(heter[5])

// courses.push("Java");
// courses.unshift("Python");
// courses.pop();
// courses.shift()

console.log(courses)

const isThereHTML = courses.includes("Java")
const cssPosition  = courses.indexOf("CSS")

console.log("Checking if HTML is in the course outline:", isThereHTML) // true
console.log("Checking the position of CSS", cssPosition)

// extarcting potion
const needCourse = courses.slice(0, 3)
console.log(needCourse)
console.log(courses) // original array is not affected


// converting array to string using join
const coursesString = courses.join(", ")
console.log(coursesString)




// Working with high order array methods

const persons = [
  {name: 'frank', age: 30},
  {name: 'obed', age: 25},
  {name: 'james', age: 20},
  {name: 'jane', age: 35},
]

const person = {
  name: 'frank',
  age: 30,
  skills: ['HTML', 'CSS', 'JS', 'React'],
  gender: 'male',
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  phone: '123-456-7890',
  email: 'obed@example.com'
}

// Dot notation
console.log(person.name)
console.log(person.age)
console.log(person.address.city)

console.log(person.skills.includes("python"))