// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.


// //1
// Write a function equalTo that takes in two inputs and checks whether the two inputs are identical.

// function equalTo (a,b){
//   if (a ===b) {
//     return "they are equal"
//   }else{
//     return "Not equal"
//   }
// }
// console.log(equalTo(2,2));



// //2
// Write a function or that takes in two inputs and returns a boolean of whether at least one has a truthy value.

// function IsTruth (num1, num2){
//   if (num1 || num2){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(IsTruth(2,0));


//3
// Write a function and that takes in two arguments and returns a boolean of whether both arguments have a truthy value.

// function And (arg1, arg2){
//   if (arg1 && arg2){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(And(0,0));













//4
// Write a function printAGrade that takes in a number between 1 and 100. It should return the grades A, B, C, D, or F. Anything over a hundred should be considered an A.

// const printAGrade = (num) => {
//   // for (let num=1; num<=100; i++){
//     if(num >= 90 ){
//       return "A - " + num
//     }else if (num >= 80 && num <90){
//       return "B - " + num
//     }else if(num>=0 && num<80){
//       return "F - " + num
//     }
//   }
// // } // NO FOR LOOP !! bc testing for a "num" WE will choose.
// // NOT making a LIST!
// console.log(printAGrade(8));





//5
// FizzBuzz - a function that console logs all the numbers from 1 to 100, with three exceptions. For numbers divisible by only 3, log "Fizz" instead of the number, for numbers divisible by only 5 log "Buzz" instead, and for numbers divisible by 3 and 5 log "FizzBuzz".

// for(let i = 1; i<=100; i++){
//   if(i%3===0 && i%5===0){
//     console.log("FizzBuzz");
//   }else if(i%3===0){
//     console.log("Fizz");
//   }else if(i%5===0){
//     console.log("Buzz");
//   }else{
//     console.log(i);
//   }
// }






// 6. // not yet   - but alternative (filter) works:

// getEvens - takes an array as an argument and returns only the even elements.

// const getEvens = (arr) => {
//   let answer;
//   for(let i =0 ; i <arr.length; i++){
//     if (arr[arr.length-1]%2 ==0){
//     if (arr%2 ==0){
//     if (arr[i] % 2 ==0)
//       // console.log(i, "- i");
//       answer =  arr[arr.length-1] + " - arr"
//     // }else{
//     }
//   }
//   // console.log(arr.length);
//   console.log(arr[arr.length -1]);
//   console.log(arr[arr]);
//   return answer
// }
// console.log(getEvens([4,1,2,3,4,5]));



//---- OR ------//6

// function getEvens (arr) {
//   return arr.filter (el => el % 2 ===0)
// }
// console.log(getEvens([5,6,4,3]));
//
//
//
// const getOdds = (arr) =>{
//   return arr.filter(el => el %2 !== 0)
// }
// console.log(getOdds([5,7,8,4]));
//
//
//
// const getLong = (arr) => { //get elements of certain length
//   return arr.filter (el => el.length > 2)
// }
// console.log(getLong(["4,3,6,7,834", "a", "abc"]));
//
//
// const getA = (arr, letter) => {
//   return arr.filter(el => el === letter)
// }
// console.log(getA(["M", "a", "bM", "al"], "a"));






//7 median - takes in an array and returns the median. If the length is even it returns the average of the middle elements.

//------------

// const sortArr = (arr) =>{
//   let sorted = arr.sort((a,b) => a-b)
//
//   return sorted
// }
// // console.log(sortArr([89,90,76,23,67]))


// const middleArr = (arr) => {
//   let middle;
//     // console.log(arr.length, arr[arr.length-1], arr[(arr.length - 1)/2], (arr.length % 2 !==0), !(arr.length%2));
//
//   // if(!arr.length % 2){
//   //   middle = arr[(arr.length - 1)/2]
//   // }
//
//
//   // return middle;
// };
// console.log(middleArr([89,67,79,23,89]));




//------------
// Full answer:

// const median = (arr) => {
//   let sorted = arr.sort((a,b) => a-b)
//   let middle;
//     console.log(sorted);
//     // console.log(sorted.length/2); // test
//     // console.log(Math.floor((sorted.length -1)/2));
//
//     if (sorted.length % 2 !==0){
//       middle = sorted[(sorted.length-1)/2]
//       // console.log(middle);
//
//     }else{
//       middle = ( sorted[Math.floor((sorted.length -1)/2)] + sorted[(sorted.length/2)] ) /2
//     }
//   return middle
//
// };
// console.log(median([89,67,45,90]));







//8  // Not yet
// switchCase - takes in a string and returns a string with every other letter alternating between capital and lowercase.

// const switchCase = (str) => {
//
//   let output = ""
//
//   for (let i = 0 ; i< str.length; i++) {
//       // console.log(i, i%2===0, str[i]);
//
//       if(i%2===0){
//         output += str[i].toUpperCase();
//       }else{
//         output += str[i].toLowerCase();
//       }
//   }
//   return output
// }
// console.log(switchCase("abbie"));




// 9
// counter - a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, ignore spaces, but it should be case insensitive.


// const counter = (str) => {
//   let obj = {}
//
//   for (let i= 0; i<str.length; i++){
//       // let cased = str[i].toLowerCase()
//       // console.log(cased[]);
//       // console.log(obj[str[i]]);
//     if(str[i].toLowerCase()=== " "){
//       continue;
//     }else if (str[i].toLowerCase()===","){
//       continue;
//     }
//
//     if(!obj[str[i].toLowerCase()]) {
//       obj[str[i].toLowerCase()] =1
//     }else {
//       obj[str[i].toLowerCase()] +=1
//     }
//   }
//   return obj
// }
// console.log(counter("Nielene Thomas, MD"));





// 10
// countZeroes - a function that takes in an array of numbers and returns the amount of zeroes that occur in it.

// //nah
// const countZeroes = (arr) => {
//   obj = {}
//
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === 0){
//       obj[arr[i]] +=1
//     }else {
//       continue;
//     }
//   }
//  return obj
// }
// console.log(countZeroes([0,13,5,87,0,0,0]))


const countZeroes = (arr) => {
  return arr.reduce( (acc, el) => {
    if (el === 0) {
      acc ++
    }
    return acc
  }, 0)
}
countZeroes([0,00,34,56,78,0])

npm install
npm test

//
// 11
// isPalindrome - a function that takes in a string and returns whether that string is a palindrome.
//
// 12
// includes - a function that takes in an array and a target. Returns a boolean whether or not the target is included in the function.
//
// 13
// getMiddle - function that returns the middle character of a string. If the length is even it should return the middle two characters.
//
// 14
// palindromeSubstrings - a function that takes in a string and returns an array of all the palindrome substrings.
//
// 15
// disemvowel - a function that removes all the vowels from a string.
//
// 16
// targetIndices - a function that takes in array of numbers and a target. Return the indices as an array of the pair of elements that add up to that target.
//
// 17
// rangeWithStep - a function that takes three number variables: min, max and step. The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step. If no step value is provided, the increment will be 1.
//
// 18
// doubler - a function that doubles each element in an array.
//
// 19
// largest - a function that returns the largest number in an array.
//
// 20
// secondLargest - a function that returns the second largest value in an array.
//
// 21
// factors - a function that returns the factors of a number in ascending order.
//
// 22
// sum - a function that returns the sum of all numbers.
//
// 23
// product - a function that returns the product of all numbers.
//
// 24
// getProps - a function that takes in an object and returns the keys .
//
// 25
// getValues - a function that takes in an object and returns the values.
//
//
// getAverageAge - a function that takes in an array of people objects. It should return the average age of all the objects.
//
// 27
// myRotate - a function that takes in an array and a shift number. The array should be rotated by that shift number. The shift should default to zero.
//
//
// myRotate([1, 2, 3]) // => [2, 3, 1]
// myRotate([1, 2, 3], -1) // => [3, 1, 2]
//
// 28
// repeat - a function that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.
//
// 29
// noDups - a function that takes in an array and returns an array with no duplicate elements.
//
// 30
// concatAndRemoveDupes - a function that takes in two arrays and returns one array with no duplicates elements.
//
// 31
// elementDivisibleBy - a function that takes in a divisor and arr. Use filter to return a new array of every element of arr that can be evenly divided by divisor.
//
// 32
// numberTimesIdx - a function that takes in an array and returns an array with each element multiplied by it's index.
