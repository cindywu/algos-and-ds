export {};
const firstName= "Kyle"
const age = 25
// const sayHi = function() {
//   console.log("hi")
// }

type Person = {
  firstName: string,
  age: number,
  sayHi: () => void
}

const propertyName= 'firstName'
const index = 1

const person : Person = {
  // firstName: firstName,
  // age: age,
  // sayHi: sayHi,
  // firstName,
  [propertyName]: firstName,
  [`age${index}`]: age,
  age,
  // sayHi,
  sayHi() {
    console.log("hi")
  }
}

console.log({person})