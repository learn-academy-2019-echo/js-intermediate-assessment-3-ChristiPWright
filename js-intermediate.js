// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//longform
const getFib = (n) => {
  let fibArray = []
  let placeholder = 0 
  for(let i=0; i<=n; i++){
    placeholder += i
    fibArray.push(placeholder)
  }
  return fibArray
}
console.log(`#1: ${getFib(10)}`)
//refactor- wanted to use map but researched and realized not a great solution; came across a recursive solution which I like so I stole; <https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053>
// below totally doesn't work yet but later id like to keep going down this rabbit trail
// function fib(n) {
//   let fibArray = []
//   if (n < 2){
//     fibArray.push(n)
//   } else {
//     fibArray.push(fib(n - 1) + fib (n - 2))
//   }
//   return fibArray
// }
// console.log(fib(10))

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

// terenary requires an else... so tried to break out the interior function not working yet
// const oddChecker1 = (arg) => {
//   let newArray = arg.map(element => 
//       if (typeof element === "number" && element%2 !== 0){
//         element
//       })
//   return newArray
// }
// console.log(`#2A: ${oddChecker1(fullArr1)}`)

const oddChecker = (arg) => {
  let newArray = []
  for(let i = 0; i <arg.length; i++){
    if(typeof arg[i] === "number"){
      if(!arg[i]%2 === 0){
        newArray.push(arg[i])
      }
    }
  }
  return newArray
}
console.log(`#2: ${oddChecker(fullArr1)}`)

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(`#3A: ${bicycle.type}`)

// Log the bell:
console.log(`#3B: ${bicycle.gear[2]}`)

// Log the PSI:
console.log(`#3C: ${bicycle.wheels.specs[2]}`)


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]
const reverser = (array) => {
  return array.reverse()
}
console.log(`#4A ${reverser(originalArray1)}`)
console.log(`#4A ${reverser(originalArray2)}`)

// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })
//tried forEach but returned undefined.. why? why is forEach being such a punk in my assessments
let array1 = [3, 4, 5]
let array2 = [23, -9, 0]
let array3 = [4.5, -4.5, 12]


const multTwo = (array) => {
  return array.map(element => element *2)
}
console.log(`#5A: ${multTwo(array1)}`)
console.log(`#5B: ${multTwo(array2)}`)
console.log(`#5C: ${multTwo(array3)}`)

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3
const letterCounter = (string) => {
  let times = 0
  for(let i = 0; i<string.length; i++){
    if(string.toLowerCase()[i] === "l"){
      times += 1
    }
  }
  return times
}
console.log(`#6: ${letterCounter(ourString)}`)

//refactor - 
const letterCounter1 = (string) => {
  let array = string.toLowerCase().split("")
  //console.log(array)
  let times = 0
  array.map(element => element === "l" ? times+=1 : times += 0)
  return times
}

console.log(`#6: ${letterCounter1(ourString)}`)


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (string) => {
  let index = 0
  if(string.length%2===0){
    index = Math.floor(string.length/2)     
    return string[index - 1] + string[index]
  } else {
    index = Math.floor(string.length/2)     
    return string[index]
  }
}
console.log(`#7A: ${middleLetter(middleLetters1)}`)
console.log(`#7B: ${middleLetter(middleLetters2)}`)



// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Sphere{
  constructor(name, radius){
    this.name = name
    this.radius = radius
  }
  area(){
    let sphereArea = 4*Math.PI*this.radius**2
    return `The area of the ${this.name} is ${sphereArea}.`
  }
}

var sphere1 = new Sphere('sphere1', 4)
console.log(`#8A: ${sphere1.area()}`)
var sphere2 = new Sphere('sphere2', 1)
console.log(`#8B: ${sphere2.area()}`)
var sphere3 = new Sphere('sphere3', 3)
console.log(`#8C: ${sphere3.area()}`)

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
var { doors, transmission } = myCar.specs
console.log(`#9: ${doors} ${transmission}`)

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const arraySum = (arg) => {
  let newArray = []
  let placeholder = 0 
  for(let i=0; i<arg.length; i++){
    placeholder += arg[i]
    newArray.push(placeholder)
  }
  return newArray
}
console.log(`#10A: ${arraySum(numbersToAdd1)}`)
console.log(`#10B: ${arraySum(numbersToAdd2)}`)
console.log(`#10C: ${arraySum(numbersToAdd3)}`)