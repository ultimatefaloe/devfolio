console.log(Math.round(3.4))
console.log(Math.floor(3.9))
console.log(Math.ceil(3.1))
console.log(Math.abs(-5))

console.log(Math.max(1, 5, 3, 9, 2))
console.log(Math.min(1, 5, 3, 9, 2))

console.log(Math.random())
console.log(Math.sqrt(16))

const stringValue = "1000"

// conversion btw typesconst
const num1 = stringValue
const num =  parseInt(stringValue)

console.log(num1 + 8) //
console.log(num + 8)

// create a function that generate a random number between 1 and 100

// Array index value

//  Access by index (starts at 0)
// console.log(array[0]) // 1
// console.log(array[array.length - 1]) // 10

// // Add and remove
// // array.push(11)
// //  array.pop()
// array.unshift(10)
// array.shift()
// console.log(array)

const roles = ["admin", "user", "guest"]

const isAdmin = roles.includes("admin")

console.log(isAdmin)

const roleIndex = roles.indexOf('users')
console.log(roleIndex)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const needNum = array.slice(3, 5)
console.log(needNum)

// array to string
const arrayToString = array.join("$ ")
console.log(arrayToString)


