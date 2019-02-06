//1. -----------------
const double = (num) => {
  return (num * 2)
  return num *= 2
}

//var is global
//let is in a scope
//const is forever


//call it so it wont be undefined
const square = (num)=>{
  return num*num
}

const doubleSquare = (num) => {
  let doubleFirst = double(num);
  let sqNow = square(doubleFirst)
  return sqNow;
}
console.log(doubleSquare(3));


// mateo's:
const double = num => num*2;
const square = num => num*num;

const doubleSquare = num => square(double(num))

console.log(doubleSquare(3));


//for multiple nums, use brackets:
const ds = (a,b) => square(double(a,b))

//or:
const ds = ...arg => square(double(arg))

//----...arg puts list of args into an array
const double = num => num*2;
const square = num => num*num;


// 2. ------------------

const classyGreeting = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}`
}
//get rid of { } and "return"
const classyGreeting = (firstName, lastName) => `Hello, ${firstName} ${lastName}`

//smaller still: ...args is an arr!
const classyGreeting = (...args) => `Hello, ${arg[0]} ${arg[1]}`

console.log(classyGreeting("Nielene", "Thomas"));
//-----2nd func that-----

const yell = str => str.toUpperCase();
console.log(yell("hello"));

//
const yellGreeting = (...arg)=> yell(greeting(arg[0], arg[1]));

console.log(yellGreeting("Nielne", "Thomas"));


//-------

const greeting = (a="cool", b = "friend") => `Hello ${a} ${b}`

const yellGreeting = (...arg) => yell (greeting())

//if (!a) {
//  a = "cool"
//}


//-------CHAINING ------

let str = "HELLO"
str.split("") // into an array (of letters) //operates on a string

str.reverse() // is a array menthod

array.join("")// array mehod



str.split("").reverse().join("")

['H', 'E', 'L', 'L', 'O']
['O', 'L', 'L', 'E', 'H']
"OLLEH"


//----------

const remove Dups = (arr) => {
  let output = [];
  let obj = {};

  for (let i=0; i< arr.length ; i++){
    if (!obj[arr[i]]) {

      obj[arr[i]] = 1;

      output.push(arr[i])
    }
  }
  return output
}
console.log(removeDupes(["A", "B","C","A","B"]));


//-------
for (let i=0; len = arr.length ; i<len; i++){

i< arr.length
let len = arr.length
i < len

// key into an array:
array[index]
//key into object:
object[key]

//
obj[arr[i]
[i] = index 0
arr[i] = A
obj[arr[i]] = A

if (!obj[arr[i]]) {

  obj[arr[i]] = 1
  // reassign it to any value we want. here assignting it a value of 1. vs true or "yes"

//------Now, concat and removeDupes

const concatAndRemoveDupes = (a,b) => {
  let c = [...a, ...b];
  return removeDupes(c)
}

console.log(concatAndRemoveDupes([1,2,3],[2,3,4,5]));


    //VS

  const joindups = (a,b) => {
    let c = [...a, ...b];
    return removeDupes(c)
  }

  console.log(joinDups([1,2,3],[2,3,4,5]));


  //-----------5.

  const repeat = (str, numberOfTimes = 2) => {
    for(let i= 1 ;i = numberOfTimes ; i++){
      console.log(str);
    }
  }
  repeat("a", 3);


  // mine and theirs : ------------
  let rep;
  const repeat = (str, numberOfTimes = 2) => {
    for (let i=1; i <= numberOfTimes ; i++){
      console.log(str);
    }

  // if (numberOfTimes){
  //   rep =
  //   (console.log(str)) * numberOfTimes;
  // }else{
  //
  // }
  //
  // return rep;
  }
  // console.log(repeat("mine"));
  // console.log(repeat("mine", 5));
  repeat("mine", 3)


  //----------



  const sumFunc = (...args) => {
    let sum = 0;

      for (i = 0; i < args.length; i++) {
        sum += args[i];
      }

    return sum;
  };

  console.log(sumFunc(1, 2, 3, 4));


  //  7.------ picture




  // 4.

const sorted = arr => arr.sort ((a,b) => a - b);
  //b-a => descending
  //a-b => ascending
  console.log(sorted(grades));

const midElem = arr => {
  // if odd length = 3 => 3/2 = floor(1.5) = ind 1.
  let mid = Math.floor(arr.length/2); // index
  //arr[mid] //= arr[i]

//ternery operator
condition? true : false ;
if statement? then : then ;


  return  // if length = odd; else return that.
  // length = odd?
    //arr[mid] : (arr[mid] + arr[mid -1])/2;
}

  //
//dont need for loop for sort or for middleElement

// arr1.length = 1 === ar1 = [1] // arr[index0]= odd
// arr2.length = 2 === arr ... // picture

return (arr.length %2)? (arr[mid]): (arr[mid] + arr(mid-1)/2);

//--------

let grades = [91,85, 100,92, 88];
const median = grades => midElem(sorted(grades));
console.log(median(grades));
