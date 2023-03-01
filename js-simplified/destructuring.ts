type Person = {
  name: string,
  age: number,
  favoriteFood: string,
  address: Address
}
type Address = {
  street: string,
  city: string
}

const array : string[] = ["A", "B", "C", "D"]
const person : Person = {
  name: "Kyle",
  age: 25,
  favoriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
  },
}

const [first, second, third] = array
console.log(first)
console.log(second)
console.log(third)

const {name: firstName, age } = person

const {
  address: {street, city}
} = person

console.log(firstName)
console.log(age)

console.log(street)
console.log(city)

function nameToFirstAndLast(fullName:string) {
  let nameArr : string[] = fullName.split(" ")
  console.log({nameArr})
  const [firstName, lastName] = nameArr

  // return nameArr
  return {
    firstName: firstName,
    lastName: lastName,
  }
}

const {firstName : fName, lastName : lName} = nameToFirstAndLast("Kyle Cook")
console.log({fName})
console.log({lName})


function addAndMultiply({a,b = 4}:any) { // b = 4 means default value if b is not there
  // const a = options.a
  // const b = options.b
  // const {a,b} = options
  return [a+b, a*b]
}

const [sum, product] = addAndMultiply({a:2})
console.log(sum, product)