const readline = require('readline');

const readlineSync = require('readline-sync');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);


  //Wait for user's response.
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');

  // Handle the secret text (e.g. password).
  var favFood = readlineSync.question('What is your favorite food? ', {
   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, ' + userName + ' loves ' + favFood + '!');

  // this is for the input and output for the user


  rl.close();
});




// var readlineSync = require('readline-sync');
//
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
//
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
