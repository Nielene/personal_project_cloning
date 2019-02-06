
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

// 7
// median - takes in an array and returns the median. If the length is even it returns the average of the middle elements.

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



// 18----------------------------------------

// doubler - a function that doubles each element in an array.

const doubler = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
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










































//
