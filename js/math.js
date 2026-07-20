// console.log(Math.round(3.4))
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))
// console.log(Math.abs(-5))

// console.log(Math.max(1, 5, 3, 9, 2))
// console.log(Math.min(1, 5, 3, 9, 2))

// console.log(Math.random()) // generate random number btw 0 and 1 (0.999999)
// console.log(Math.sqrt(16))

const randomNumBtw0And100 = Math.random() * 100;
// console.log(Math.floor(randomNumBtw0And100)) // generate random number btw 0 and 100

const stringValue = "1000";

// conversion btw typesconst
const num1 = stringValue;
const num = parseInt(stringValue);

// console.log(num1 + 8) //
// console.log(num + 8)

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

// function diceRoll() {
//   const diceRool = Math.floor(Math.random() * 6) + 1;
//   console.log(diceRool);
// }

function diceRoll() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);
  return diceRoll;
}

const player1 = diceRoll();
const player2 = diceRoll();

console.log(`Player 1 rolled: ${player1}`);
console.log(`Player 2 rolled: ${player2}`);

const coinToss = () => {
  const toast = Math.floor(Math.random() * 2);
  if (toast === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
};
coinToss();

//Head or Tail 0 and 1
// statment condition if
