const arr2 = ["A", "B", "C", "D"]

type Person1 = {
  name: string,
  age: number,
  favoriteFood: string,
  address: Address1
}

type Address1 = {
  street: string,
  city: string,
  zipCode: string
}

const numberArray : number[] = [1,2,3,4]

const personA : Person1 = {
  name: "Kyle",
  age: 25,
  favoriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipCode: "5555",
  }
}

function sum2(...numbers:any) {
  return numbers.reduce((sum: number, number: number) => sum + number, 0)
  // return numbers
}

// console.log(sum2(2,3,6,7,2))
console.log(sum2(...numberArray))