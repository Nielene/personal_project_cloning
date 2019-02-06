//npm test / node unit1_mid.js / 

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


// 24----------------------
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
// myRotate([1, 2, 3]) // => [2, 3, 1]
// myRotate([1, 2, 3], -1) // => [3, 1, 2]



// 29 -------------------------------------
// noDups - a function that takes in an array and returns an array with no duplicate elements.

const noDups = (arr) => {
  let set1 = new Set(arr)
  return new Array(...set1)
}
//The Set object lets you store unique values of any type, whether primitive values or object references.

// console.log(noDups([5,1,2,3,5,1,1]));



// 30---------------------------------------

// concatAndRemoveDupes - a function that takes in two arrays and returns one array with no duplicates elements.

const concatAndRemoveDups = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2)

  let set1 = new Set (arr3)
  return new Array(...set1)
}

// console.log(concatAndRemoveDups([1,2,3,4],[1,2,5]));


//-------------------------------------------
// 31
// elementDivisibleBy - a function that takes in a divisor and arr. Use filter to return a new array of every element of arr that can be evenly divided by divisor.


const elementDivisibleBY = (divisor, arr) => {
  return arr.filter(el => el % divisor === 0)
}

// console.log(elementDivisibleBY(2, [1,2,3,4,5]));


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










//
