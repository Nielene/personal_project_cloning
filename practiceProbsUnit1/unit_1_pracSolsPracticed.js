
// 1
// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.

function equalTo(arg1, arg2) {
  return arg1 === arg2
}
// console.log(equalTo(2,3));



//----------------------------------------

// 2
// Write a function or that takes in two inputs and returns a boolean of whether at least one has a truthy value.

function or (arg1, arg2) {
  return !!(arg1 || arg2)
}
// console.log(or(0, 3));




//----------------------------------------


// 3
// Write a function and that takes in two arguments and returns a boolean of whether both arguments have a truthy value.

function and(arg1, arg2) {
  return (!!arg1 && !!arg2)
}
// console.log(and("",true));


//-----------------------------------------


// 4
// Write a function printAGrade that takes in a number between 1 and 100. It should return the grades A, B, C, D, or F. Anything over a hundred should be considered an A.

function printAGrade (numGrade) {
  if(numGrade >= 90) {
    return "A";
  }else if (numGrade >= 80) {
    return "B";
  }else if (numGrade >= 70) {
    return "C";
  }else if (numGrade >= 60) {
    return "D";
  }else{
    return "F";
  }
}
// console.log(printAGrade(110));


//-------------------------------------------

// 5
// FizzBuzz - a function that console logs all the numbers from 1 to 100, with three exceptions. For numbers divisible by only 3, log "Fizz" instead of the number, for numbers divisible by only 5 log "Buzz" instead, and for numbers divisible by 3 and 5 log "FizzBuzz".

function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if (i % 3 === 0) {
      console.log("Fizz");
    }else if (i % 5 === 0){
      console.log("Buzz");
    }else {
      console.log(i);
    }
  }
}

// fizzBuzz()

//-------------------------------------------


// 6
// getEvens - takes an array as an argument and returns only the even elements.

function getEvens(arr) {
  return arr.filter(el => el % 2 === 0)
}
// console.log(getEvens([1,2,3,4]));

function getEvens(arr) {
  return arr.filter(el => el % 2 === 0)
}


//-----------------
//
// function getEvens(arr) {
//   let evens = [];
//   let result;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//       result = evens.push(arr[i])
//     }else{
//       continue;
//     }
//   }
//   console.log(result);
//   return result;
// }
// getEvens([1,4,3,2]);


//-------------------------------------------

// 7
// median - takes in an array and returns the median. If the length is even it returns the average of the middle elements.

//----------------------

// const sort = arr => {
//   return arr.sort((a,b) => a - b)
// }
//
// const middleElement = arr => {
//   if(arr.length % 2) {     // 4/2
//     return arr[Math.floor(arr.length/2)]; // odd length
//   }else { // even length
//     return (arr[(arr.length/2) -1] + arr[arr.length/2]) /2
//   }
// }
//
// const median = arr => {
//   middleElement(sort(arr))
// }

// let arr7 = [1,2,3,4,5]
// console.log(middleElement(arr7));
// console.log(sort(arr7));
// console.log(median(arr7));

//----------- Mine: ----------

const median = (arr) => {
  let sorted = arr.sort((a,b) => a-b)
  let middle;

    if (sorted.length % 2 !==0){
      middle = sorted[(sorted.length-1)/2]
    }else{
      middle = ( sorted[Math.floor((sorted.length -1)/2)] + sorted[(sorted.length/2)] ) /2
    }

  console.log(sorted); // just console log it
  return middle
  // //return sorted; //no need
};

// let arr7a = [89,67,45,90]
// console.log(median(arr7a));

//----------tests:-----------


// const median = arr => {
//   arr.sort((a,b)=> a-b)
//
//   if(arr.length % 2 === 0) {  // even eg 4 elements [0,1,2,3]
//     return (arr[Math.floor((arr.length - 1)/2)] + arr[arr.length/2] ) /2
//   }else{      // odd. eg 3 elements [0,1,2]
//     return arr[(arr.length - 1)/2]
//   }
// }
//
// let arr = [1,2,3]
// console.log(arr.sort((a,b)=> a-b));
// console.log(median(arr));

//-------------------------------------------

// 8
// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

const switchCase = str => {
  let switched = ""

  for (let i = 0; i < str.length; i++) {
    if (i%2===0) {
      switched += str[i].toUpperCase()
    } else {
      switched += str[i].toLowerCase()
    }
  }
  return switched
}

// let str = "alweays"
// console.log(switchCase(str));
// // switched.push(action);   // YOU PUSH AN ARRAY! NOT A STRING!


//-------------------------------------------


// 9
// counter - a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, ignore spaces, but it should be case insensitive.

const counter = str => {
  let object = {}

  for (let i = 0; i < str.length; i++) {
    let temp = str[i].toLowerCase();

    if (temp === " ") {
      continue;
    // } else if (temp === ",") {
    //   continue;
    }

    if (object[temp]) {
      object[temp]++
    } else {
      object[temp] = 1;
    }
  }
  return object;
}
let str = "Hello, World"
// console.log(counter(str));



//-------------------------------------------


// 10
// countZeroes - a function that takes in an array of numbers and returns the amount of zeroes that occur in it.

//-----------------------------

let arr = [1,2,5,4,0];

function countZeroes(arr) {
  return arr.reduce((acc, el) => {
    if (el === 0) {
      acc++
    }
    return acc;
  }, 0)
}

countZeroes(arr)

//-------------mine--------------

// const countZeroes = arr => {
//   let zeroes = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroes++
//     }
//   }
//   return zeroes
// }
//
// let arr10 = [0,0,0,0,4,0,1,0]
// console.log(countZeroes(arr10));





//-------------------------------------------

// 11
// isPalindrome - a function that takes in a string and returns whether that string is a palindrome.
    // (palindrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.)

const isPalindrome = str => {
  if (str.length < 2) return false;
  return str === str.split("").reverse().join("")//a boolean?
}

let str11 = "madame"
// console.log(isPalindrome(str11));


//----------alternative ----not working yet------
// const isPalindrome = str => {
//   let str1 = [];
//
//   for (let i = str.length - 1; i >= 0; i--) {
//     str1.push(str)
//     console.log(str1.push(str));
//     // if (str1 === str ) {
//     //   return true
//     // }else{
//     //   return false
//     // }
//   }
// }
// let str11 = "madam"
// isPalindrome(str11)
//
// // let str11 = "madam"
// // console.log(isPalindrome(str11));




//-------------------------------------------
// -------giving trouble.------------

// 12
// includes - a function that takes in an array and a target. Returns a boolean whether or not the target is included in the function.

//------------for Each: -----------

// const includes = (arr, target) => {
//   let output = false;
//   arr.forEach (el => {
//     if (el === target) {
//       output = true
//     }
//   })
//   return output;
// }

// let arr12 = [1,2,3,4,5];
// let target = 1;
// console.log(includes(arr12, target));

//--------- for loop:-----------

const includes = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

let arr12 = [1,2,3,4,5,'h'];
let target = 'd';
// console.log(includes(arr12, target));



//-------------------------------------------
// 13
// getMiddle - function that returns the middle character of a string. If the length is even it should return the middle two characters.

function getMiddle(str) {
  let middle;

  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0){
      middle = str[(str.length-1)/2]
    } else {
      middle = str[Math.floor(((str.length-1)/2))] +  str[str.length/2]
    }
  }
  return middle
}

// console.log(getMiddle("sit"));
// console.log(getMiddle("site"));


//-------------------------------------------
// 14
// palindromeSubstrings - a function that takes in a string and returns an array of all the palindrome substrings.

const palindrome = str => {
  if (str.length < 2) {
    return false
  }
  return str === str.split("").reverse().join("")
}
// console.log("Palindrome:", palindrome("madam"));

const palindromeSubstrings = str => {
  let output = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      let temp = str.slice(i, j)
      if (palindrome(temp)) {
        output.push(temp)
      }
    }
  }
  return output
}

// console.log(palindromeSubstrings("ababa"));



//-------------------------------------------
// 15
// disemvowel - a function that removes all the vowels from a string.

const disemvowel = str => {
  let result = "";
  let vowels = ["a", "e", "i", "o" ,"u"];
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) { //is included in
      result += str[i];
    }
  }
  return result;
}

//-----------Mateo:--------

function disemvowel(str) {
 return str
   .toLowerCase()
   .split('')
   .filter(
     el => el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u'
   )
   .join('');
}

disemvowel('hello world');



//-------------------------------------------
// 16
// targetIndices - a function that takes in array of numbers and a target. Return the indices as an array of the pair of elements that add up to that target.

const targetIndices = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
}
// console.log(targetIndices([1,2,3,0,5,-1]), 0);



//-------------------------------------------
// 17
// rangeWithStep - a function that takes three number variables: min, max and step. The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step. If no step value is provided, the increment will be 1.

const rangeWithStep = (min, max, step = 1) => {
  let stepped = [];
  for (var i = min; i < max; i+= step) {
    stepped.push(i);
  }
  return stepped;
}

// console.log(rangeWithStep(4,33,5));


//-------------------------------------------
// 18
// doubler - a function that doubles each element in an array.

const doubler = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}




//-------------------------------------------
// 19
// largest - a function that returns the largest number in an array.

const largest = arr => {
  return arr.reduce((acc, el) => {
    if (el > acc) {
      return el
    } else {
      return acc
    }
  })
}


//-------------------------------------------
// 20
// secondLargest - a function that returns the second largest value in an array.

const secondLargest = arr => {
  let largest = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = lagerst;
      largest = arr[i];
    }else if (arr[i] > second){
      second = arr[i];
    }
  }
  return second;
}


//-------------------------------------------

// 21
// factors - a function that returns the factors of a number in ascending order.

const factors = num => {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      output.push(i)
    }
  }
  return output
}



//-------------------------------------------
// 22
// sum - a function that returns the sum of all numbers.

const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

//-------------------------------------------
// 23
// product - a function that returns the product of all numbers.

const product = arr => {
  if (arr.length === 0) {
    return 0;
  }

  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]
  }
  return total;
}

//----------------OBJECTS:------------------
// 24
// getProps - a function that takes in an object and returns the keys .


const getProps = obj => {
  return Object.keys(obj)
}

//-------------------------------------------
// 25
// getValues - a function that takes in an object and returns the values.

const getValues = obj => {
  return Object.values(obj)
}
//-------------------------------------------
//26
// getAverageAge - a function that takes in an array of people objects. It should return the average age of all the objects.

const getAverageAge = arrOb => {
  let sum = 0;
  for (let i = 0; i < arrOb.length; i++) {
    sum += arrOb[i].age;
  }
  return Math.round(sum/arrOb.length);
}

//-------------------------------------------
// 27
// myRotate - a function that takes in an array and a shift number. The array should be rotated by that shift number. The shift should default to zero.
//
// myRotate([1, 2, 3]) // => [2, 3, 1]
// myRotate([1, 2, 3], -1) // => [3, 1, 2]

const myRotate = (arr, shift = 0) => {

  if (shift > 0) {
    for (let i = 0; i < shift % arr.length; i++) {
      let shifted = arr.shift();
      arr.push(shifted)
    }

  } else {

    for (let i = 0; i > shift % arr.length; i--) {
      let popped = arr.pop();
      arr.unshift(popped)
    }
  }
  return arr;
}

// console.log(myRotate([1,2,3],2));





//-------------------------------------------
// 28
// repeat - a function that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.

const repeat = (str, numberOfTimes = 2) => {

  for (let i = 0; i < numberOfTimes; i++) {
    console.log(str);
  }
}

// repeat("string", 9)


//-------------------------------------------

// 29
// noDups - a function that takes in an array and returns an array with no duplicate elements.

//------their Alternative: ----

//The Set object lets you store unique values of any type, whether primitive values or object references.

const noDups = (arr) => {
  let set1 = new Set(arr)
  return new Array(...set1)
}

// console.log(noDups([5,1,2,3,5,1,1]));


// --------mine - incomplete --------

// const noDups = arr => {
//   let newArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//
//     if (newArr[arr[i]] !== arr[i]) {
//       newArr.push(arr[i])
//     }
//   }
//
//   return newArr
// }
// console.log(noDups([1,1,2,3,1]));



// 30---------------------------------------

// concatAndRemoveDupes - a function that takes in two arrays and returns one array with no duplicates elements.

//--------mine: ----------

const concatAndRemoveDups = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2)

  let set1 = new Set (arr3)
  return new Array(...set1)
}

// console.log(concatAndRemoveDups([1,2,3,4],[1,2,5]));

//------theirs: ---------


const removeDupes = arr => {
  let set1 = new Set(arr)
  return [... set1]
}

const concatAndRemoveDupes = (arr1, arr2) => {
  return removeDupes([...arr1, ...arr2])
}



//-------------------------------------------
// 31
// elementDivisibleBy - a function that takes in a divisor and arr. Use filter to return a new array of every element of arr that can be evenly divided by divisor.


const elementDivisibleBY = (divisor, arr) => {
  return arr.filter(el => el % divisor === 0)
}

// console.log(elementDivisibleBY(2, [1,2,3,4,5]));

//----theirs: --------

function elementDivisibleBy(divisor, arr) {
  return arr.myFilter((el) => {
    return el % divisor === 0
  })
}


//-------------------------------------------
// 32
// numberTimesIdx - a function that takes in an array and returns an array with each element multiplied by it's index.

// --------mine: --------

const numberTimesIndx = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * i)
  }
  return newArr
}
// console.log(numberTimesIndx([0,1,2,3,4,5]));

//--------theirs:---------

function numberTimesIdx(arr) {
  return arr.map((el, i) => {
    return el * i
  })
}

//-------------------------------------------
// 33
// Array.prototype.myFlatten - a function on the Array class that takes a multi dimensional array and returns it as one array.

// The Array.isArray() method determines whether the passed value is an Array.

Array.prototype.myFlatten = function () {
  let output = [];

  for (let i = 0; i < this.length; i++) {

    if (Array.isArray(this[i])) {
      output = output.concat(this[i].myFlatten())

    }else{
      output.push(this[i])

    }
  }
  return output;
};

console.log([1,2,[3,4,5,[7,8]]].myFlatten());


//-------------------------------------------
// 34
// Array.prototype.myForEach - your own forEach

  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
    return this;
  };


//-------------------------------------------
// 35
// Array.prototype.myMap - your own map.

  Array.prototype.myMap = function (callback) {
    let output = [];
    this.forEach(el => {
      output.push(callback(el))
    })
    return output;
  };



//-------------------------------------------
// 36
// Array.prototype.myReduce - your own reduce.

Array.prototype.myReduce = function (callback, initialValue) {

  let counter = 0;
  let accumulator;

  if (initialValue === undefined) {
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


//-------------------------------------------
// 37
// Array.prototype.myEvery - your own every.

  Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if(!callback(this[i])) {
        return false;
      }
    }
    return true;
  };


//-------------------------------------------
// 38
// Array.prototype.mySome - your own some.
  Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }
    return false;
  };



//-------------------------------------------
// 39
// Array.prototype.myFilter - your own filter.

  Array.prototype.myFilter = function (callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        output.push(this[i])
      }
    }
    return output;
  };



//-------------------------------------------
// 40
// Array.prototype.myTranspose - transpose a matrix.

Array.prototype.myTranspose = function () {
  let grid = [];
  for (let col = 0; col < this[0].length; col++) {
    grid[col] = [];
    for (let row = 0; row < this.length; row++) {
      grid[col][row] = this[row][col]
    }
  }
  return grid;
};


//-------------------------------------------
// 41
// Array.prototype.myJoin - your own join.
// array to string i believe:
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



//-----------------------------------
// 42
// String.prototype.mySlice - your own slice.

String.prototype.mySlice = function (start, end) {
  let slice = "";

  if (typeof end === "undefined") {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i]
  }
  return slice;
};
