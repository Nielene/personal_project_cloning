// 1
// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.

function equalTo(arg1, arg2) {
  return arg1 === arg2
}
// console.log(equalTo(2,3));


// 2
// Write a function or that takes in two inputs and returns a boolean of whether at least one has a truthy value.

function or (arg1, arg2) {
  return !!(arg1 || arg2)
}
// console.log(or(0, 3));

// 3
// Write a function and that takes in two arguments and returns a boolean of whether both arguments have a truthy value.

function and(arg1, arg2) {
  return (!!arg1 && !!arg2)
}
// console.log(and("",true));

// 6
// getEvens - takes an array as an argument and returns only the even elements.

function getEvens(arr) {
  return arr.filter(el => el % 2 === 0)
}
// console.log(getEvens([1,2,3,4]));


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

// // switched.push(action);   // YOU push AN ARRAY! YOU += A STRING!


// 11
// isPalindrome - a function that takes in a string and returns whether that string is a palindrome.
    // (palindrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.)

const isPalindrome = str => {
  if (str.length < 2) return false;
  return str === str.split("").reverse().join("")//a boolean?
}

// let str11 = "madame"
// console.log(isPalindrome(str11));



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


//--------- for loop: /theirs-----

const includes = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// let arr12 = [1,2,3,4,5,'h'];
// let target = 'd';
// console.log(includes(arr12, target));


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
  for (let i = min; i < max; i+= step) {
    stepped.push(i);
  }
  return stepped;
}

// console.log(rangeWithStep(4,33,5));

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

// 28---------------------------------------

// repeat - a function that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.

const repeat = (str, numberOfTimes = 2) => {

  for (let i = 0; i < numberOfTimes; i++) {
    console.log(str);
  }
}

// repeat("string", 9)


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


//
