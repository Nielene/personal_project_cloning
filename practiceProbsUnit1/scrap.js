//8  // Not yet
// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

const switchCase = (str) => {
  let toArray = str.split("");
  let cased
  // console.log(toArray);

  for (let i = 0; i<toArray.length; i++){
    // console.log(toArray[1].toUpperCase());

    if(i>=0 && i<toArray.length){
      let okay = toArray[i]
      return okay
    }
    console.log(okay);

    if (i%2===0){
       cased =  toArray[i].toUpperCase()
      // console.log(cased);
    }else if (i%2!==0){
       cased = toArray[i].toLowerCase()

    }
  }

  return cased

  // cased =  toArray.join("").toUpperCase()
  // let toStr = cased.join("");
  // return toStr
}

console.log(switchCase("Abbie"));


//----------


//8  // Not yet
// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

const switchCase = (str) => {
  let output = ""

  // let splitted = str.split("");
  //   console.log(splitted);
  // let switched;

  for (let i = 0 ; i< str.length; i++) {
      console.log(i, i%2===0, str[i]);

      if(i%2===0){
        output += str[i].toUpperCase();
      }else{
        output += str[i].toLowerCase();
      }
    //
    // let joined = (switched[i].join(""))
    // // output += joined
  }
  return output
}
console.log(switchCase("abbie"));


// -----------

// 9 // some editing
// counter - a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, ignore spaces, but it should be case insensitive.


const counter = (str) => {
  let obj = {}

  for (let i= 0; i<str.length-1; i++){
      // let cased = str[i].toLowerCase()
      // console.log(cased[]);
      console.log(obj[str[i]]);

    if(!obj[str[i]]) {
      obj += str[i].toLowerCase()
    }else {
      obj.str[i].toLowerCase() +=1
    }
  }
  return obj
}
console.log(counter("Nielene"));


//----------Practice:-----------------
//----------Practice:-----------------
//----------Practice:-----------------
//------------Hard-----------------

//myFlatten
//myForEach
//myMap
//myReduce
//myEvery
//mySome
//myFilter
//myTranspose
//myJoin
//mySlice


Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
  return this[i]
};

//-----------------------------------

Array.prototype.myMap = function (callback) {
  let output = []
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]))
  }
  return output;
};

Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]))
  }
  return output;
};
//-------     -------     -------
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   this.forEach(el => {
//     output.push(callback(el))
//   })
//   return output;
// };

//--------------------------------

  Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }
    return false;
  };

  Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }
    return false;
  };
//-----------------------------------

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if ( ! callback(this[i])) {
      return false;
    }
  }
  return true;
};

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if ( ! callback(this[i])) {
      return false;
    }
  }
  return true;
};

//-----------------------------------

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i])
    }
  }
  return output;
};

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i])
    }
  }
  return output;
};

//-----------------------------------

Array.prototype.myFlatten = function () {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      output = output.concat(this[i].myFlatten())

    }else { // if not an array, just push it bare
      output.push(this[i])  //self-modifying method
    }
  }
  return output;
};

Array.prototype.myFlatten = function () {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      output = output.concat(this[i].myFlatten())
    } else {
      output.push(this[i])
    }
  }
  return output;
};

//-----------------------------------

// Array.prototype.myTranspose = function () {
//   let grid = [];
//   for (let col = 0; col < this[0].length; col++) {
//     grid[col] = [];
//     for (let row = 0; row < this.length; row++) {
//       grid[col][row] = this[row][col]
//     }
//   }
//   return grid;
// };
//------      --------      ---------

Array.prototype.myTranspose = function () {
  let grid = [];
  for (let i = 0; i < this[0].length; i++) {
    grid[i] = [];
    for (let j = 0; j < this.length; j++) {
      grid[i][j] = this[j][i];
    }
  }
return grid;
};

Array.prototype.myTanspose = function () {
  let grid = [];

  for (let i = 0; i < this[0].length; i++) {
    grid[i] = [];

    for (let j = 0; j < this.length; j++) {
      grid[i][j] = this[j][i];
    }
  }
  return grid;
};

Arrya.prototype.myTranspose = function () {
  let grid = [];

  for (let i = 0; i < this[0].length; i++) {
    grid[i] = [];

    for (let j = 0; j < this.length; j++) {
      grid[i][j] = this[j][i]
    }
  }
  return grid;
};


Array.prototype.myTranspose = function () {
  let grid = [];
  for (let i = 0; i < this[0].length; i++) {
    grid[i] = [];

    for
  }
};

//-------------------------------------

Array.prototype.myReduce = function (callback, initialValue) {
  let counter = 0;
  let accumulator;

  if (!initialValue) {
    counter = 1;
    accumulator = this[0];
  } else {
    accumulator = initialValue;
  }

  for (let i = counter; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let counter = 0;
  let accumulator;

  if (!initialValue) {
    counter = 1;
    accumulator = this[0];
  } else {
    accumulator = initialValue;
  }

  for (let i = counter; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator;
};


Array.prototype.myReduce = function(callback, initialValue) => {
  let counter = 0;
  let accumulator;

  if (!initialValue) {
    counter = 1;
    accumulator = this[0];
  } else {
    accumulator = initialValue;
  }

  for (let i = counter; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }

  return accumulator;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let counter = 0;
  let accumulator;

  if (!initialValue) {
    counter = 1;
    accumulator = this[0];
  }else{
    accumulator = initialValue;
  }

  for (let i = counter; i < this.length; i++) {
    accumulator = callback(accumulator, this[i])
  }
  return accumulator;
};



//-------------------------------------

Array.prototype.myJoin = function (joiner = "") {
  output = ""
  for (let i = 0; i < this.length; i++) {
    output += this[i]

    if (i !== this.length - 1) {
      output += joiner
    }
  }
  return output;
};

Array.prototype.myJoin = function (joiner = "") {
  let output = "";
  for (let i = 0; i < this.length; i++) {
    output += this[i];

    if (i !== this.length - 1) {
      output += joiner
    }
  }
  return output;
};

//-------------------------------------

String.prototype.mySlice = function (start, end = this.length) {
  let output = "";
  for (let i = start; i < end && i < this.length; i++) {
    output += this[i]
  }
  return output
};
// console.log("Stringhere".mySlice(0,5));


String.prototype.mySlice = function (start, end = this.length) {
  let output = "";
  for (let i = start; i < end && i < this.length; i++) {
    output += this[i]
  }
  return output;
};


String.prototype.mySlice = function (start, end = this.length) {
  let output = "";
  for (let i = start; i < end && i < this.length; i++) {
    output += this[i]
  }
  return output;
};

String.prototype.mySlice = function (start, end = this.length) {
  let output = "";
  for (let i = start; i < end && i < this.length; i++) {
    output += this[i]
  }
  return output;
};

//-------------------------------------

const myRotate = (arr, shift = 0) => {

  if (shift > 0) {
    for (let i = 0; i < shift % arr.length; i++) {
      let shifted = arr.shift();
      arr.push(shifted)
    }
  }else{  // go down the num line
    for (let i = 0; i > shift % arr.length; i--) {
      let popped = arr.pop();
      arr.unshift(popped)
    }
  }
  return arr;
}


const myRotate = (arr, shift = 0) => {
  if (shift > 0) {
    for (let i = 0; i < shift % arr.length; i++) {
      arr.push( arr.shift() )
    }
  } else {
    for (let i = 0; i > shift % arr.length; i--) {
      arr.unshift( arr.pop() )
    }
  }
  return arr;
}

//-------------------------------------

// getAverageAge - a function that takes in an array of people objects.

const getAverageAge = arrOb => {
  let sum = 0;
  for (let i = 0; i < arrOb.length; i++) {
    sum += arrOb[i].age;
  }
  return Math.round(sum/arrOb.length);
}

const getAverageAge = arrOb => {
  let sum = 0;
  for (let i = 0; i < arrOb.length; i++) {
    sum += arrOb[i].age;
  }
  return Math.round(sum/arrOb.length);
}

const getAverageAge = arrOb => {
  let sum = 0;
  for (let i = 0; i < arrOb.length; i++) {
    sum += (arrOb[i].age)
  }
  return Math.round(sum/arrOb.length);
}

//-------------------------------------

const elementDivisibleBY = (divisor, arr) => {
  return arr.filter (el => el % divisor === 0)
}

const elementDivisibleBy = (divisor, arr) => {
  return arr.filter (el => el % divisor === 0)
}

const elementDivisibleBy = (divisor, arr) => {
  return arr.filter( el => el % divisor === 0)
}

//-------------------------------------

const concatAndRemoveDups = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2)

  let set1 = new Set (arr3)
  return new Array (...set1)
}

//-------------------------------------

const noDups = (arr) => {
  let set1 = new Set (arr)
  return new Array (...set1)
}

//-------------------------------------

const getKeys = obj => {
  return Object.keys(obj)
}

//-------------------------------------

const getValues = obj => {
  return Object.values(obj)
}

//-------------------------------------

const disemvowel = str => {
  return
  str
  .toLowerCase()
  .split("")
  .filter(el => el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u")
  .join("")
}

//-------------------------------------

const countZeroes = arr => {
  return arr.reduce ( (acc, el) => {
    if (el === 0) {
      acc++
    }
    return acc;
  }, 0)
}


//-------------------------------------

// counter - a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, ignore spaces, but it should be case insensitive.

const counter = str => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    // let tmp = str[i].toLowerCase()

    if (str[i].toLowerCase() === " ") {
      continue; // ignore it
    }

    if ( obj [ str[i].toLowerCase() ] ) {
      obj [str[i].toLowerCase()]++
    }else{
      obj [str[i].toLowerCase()] = 1;
    }

  }
  return obj;
}

const counter = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === " ") {
      continue;
    }
    if (obj[str[i].toLowerCase()]) {
      obj[str[i].toLowerCase()]++;
    } else {
      obj [str[i].toLowerCase()] = 1
    }

  }
  return obj;
}



//----------Practice:-----------------
//----------Practice:-----------------
//----------Practice:-----------------
//------------Medium-----------------

// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.

const equalTo = (arg1, arg2) => {
  return arg1 === arg2;
}


//-------------------------------------
// Write a function or that takes in two inputs and returns a boolean of whether at least one has a truthy value.
const or = (arg1, arg2) => {
  return !!(arg1 || arg2)
}

//-------------------------------------
// Write a function and that takes in two arguments and returns a boolean of whether both arguments have a truthy value.

const and = (arg1, arg2) => {
  return (!!arg1 && !!arg2)
}

//-------------------------------------
// getEvens - takes an array as an argument and returns only the even elements.

const getEvens = arr => {
  return arr.filter (el => el % 2 === 0)
}

//-------------------------------------

// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

const switchCase = str => {
  let switched = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      switched += str[i].toLowerCase()
    } else {
      switched += str[i].toUpperCase()
    }
  }
  return switched;
}

const switchCase = str => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toLowerCase()
    } else {
      newStr += str[i].toUpperCase()
    }
  }
  return newStr;
}

//-------------------------------------
//is it true taht it is the same backward as forward?
const isPalindrome = str => {
  if (str.length < 2) return false;
  return str === str.split("").reverse().join("")
}

const isPalindrome = str => {
  if (str.length < 2) return false;
  return str === str.split("").reverse().join("")
  }
}
//-------------------------------------
// palindromeSubstrings - a function that takes in a string and returns an array of all the palindrome substrings.

const palindromeSubstrings = str => {
  let output = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (palindrome(str.slice(i,j))) {
        output.push(str.slice(i,j))
      }
    }
  }
  return output;
}

if (palindrome(str.slice(i,j)))
output.push(str.slice(i,j))


//-------------------------------------
// includes - a function that takes in an array and a target. Returns a boolean whether or not the target is included in the function.

const includes = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}


//-------------------------------------

const targetIndices = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
}

//-------------------------------------

const rangeWithStep = (min, max, step = 1) => {
  let stepped = [];
  for (let i = min; i <= max; i+= step) {
    stepped.push(i)
  }
  return stepped;
}

//-------------------------------------

const largest = arr => {
  return arr.reduce( (acc, el) => {
    if (acc > el) {
      return acc;
    } else {
      return el;
    }
  })
}


//-------------------------------------

const secondLargest = arr => {
  let largest = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

//-------------------------------------

const factors = num => {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      output.push(i);
    }
  }
  return output;
}

//-------------------------------------
// sum - a function that returns the sum of all numbers.
const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

//-------------------------------------

cosnt product = arr => {
  let total = 1;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]
  }
  return total;
}


//-------------------------------------

const repeat = (str, numberOfTimes = 2) => {
  for (let i = 0; i < numberOfTimes; i++) {
    console.log(str);
  }
}

//-------------------------------------

const numberTimesIdx = arr => {
  return arr.map ((el, i) => el * i)
}

const numberTimesIdx = arr => {
  return arr.map((el, i) => el * i)
}




//----------Practice:-----------------
//----------Practice:-----------------
//----------Practice:-----------------
//------------Easy-----------------


//
