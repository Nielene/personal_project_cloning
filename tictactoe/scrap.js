// file 1:
class Animal
  constructor (name){
    this.name
  }

// another file:
const Animal = require('./test.js')
// RE: const Animal = require('readline-sync')


let corey = new Animal ("corey");

console.log(corey);
//------------
readline sync (not asynchronous)
while game no over, keep asking for (`next player's`) move

npm in first
npm install readline-sync

//


// Board file:------------------------------------

// //
// let lineboard =   "--------"
// let divider =  "|"
//
// let mtx = [
// `\n`  [1,2,3], `\n`[4, 5,6], `\n`[7,8,9]
// ]
//
// //let j = mtx[0][0]
//
//
// console.log(`\n`,lineboard, `\n`, divider, `\n`, lineboard, `\n`, divider, `\n`, lineboard);
// // console.log(mtx[1][2]);
// console.log(mtx);
//
//
// console.log(
//   `\n __|__|__ \n __|__|__ \n   |  |   ` );
//
//   console.log(
//     `\n __|__|__ \n __|__|__ \n   |  |   ` );

//----------------------
//     let createBoard = (mtx) => {
//     // board = [];
//     // row = [];
//     // alphabet1 = ["u","i","o"];
//     // alphabet2 = ["j","k","l"];
//     // alphabet3 = ["n","m",","]
//     for (let i = 0; i < width; i++) {
//         for (let j = 0; j < height; j++) {
//             if(board[0]){
//               console.log(alphabet1)
//             }
//         }
//         board.push(row);
//         row =[];
//     }
//     return (board);
// }
//
// let displayBoard = (board) =>{
//     for (let i = 0; i < board.length; i++) {
//         console.log(board[i]);
//     }
// }
//
// gameBoard = createBoard(3,3);
// displayBoard(gameBoard);




//


const createBoard = (mtx) => {
  for (let i = 0; i < mtx.length; i++) {
    console.log(mtx[i]);
  }
}

let mtx = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

createBoard(mtx)


//---------------------------------Human Player (ours): -------

//----- Ours: --------------
//
// function play = () => {
//   // player default = "O"
//   let player = "O";
//   // if space is not showing "X" or "O" return player's move "O" or "X"
//   // if !("X" || "O")
//   if (!mtx[i]) {
//     return player
//     // if last play was "O", display "X"; vice versa
//   }else if(mtx[i]!==player) {
//     "O" || "X";
//     // if "O" or "X" is present, "Try again"
//   }else{
//
//   }
// }
//
// if (x.innerHTML === "Hello") {
//       x.innerHTML = "Swapped text!";
//   } else {
//       x.innerHTML = "Hello";
//   }



const readline = require('readline');

const readlineSync = require('readline-sync');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//
//   //Wait for user's response.
//   var userName = readlineSync.question('May I have your name? ');
//   console.log('Hi ' + userName + '!');
//
//   // Handle the secret text (e.g. password).
//   var favFood = readlineSync.question('What is your favorite food? ', {
//    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//   });
//   console.log('Oh, ' + userName + ' loves ' + favFood + '!');
//
//   // this is for the input and output for the user




  let prompt = require('prompt');

  let board = {
      1: ' ',
      2: ' ',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
  };

  function markBoard(position, mark) {
      board[position] = mark.toUpperCase();
  }

  function printBoard() {
      console.log('\n' +
          ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
          ' ---------\n' +
          ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
          ' ---------\n' +
          ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

  }

  function isInt(value) {
      let x;
      if (isNaN(value)) {
          return false;
      }
      x = parseFloat(value);
      return (x | 0) === x;
  }

  function validateMove(position) {
      if (isInt(position) === true && board[position] === ' ') {
          return true;
      }
      return false;
  }

  // Everyone possible combination of three in a row
  let winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                         [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  // Determins if the passed in player has three in a row
  function checkWin(player) {
      for (let i = 0; i < winCombinations.length; i++) {
          let markCount = 0;
          for (let j = 0; j < winCombinations[i].length; j++) {
              if (board[winCombinations[i][j]] === player) {
                  markCount++;
              }
              if (markCount === 3) {
                  return true;
              }
          }
      }
      return false;
  }

  function playTurn(player) {

      console.log('Your turn player: ' + player);
      prompt.start();
      prompt.get(['position'], function (err, result) {

          if (validateMove(result.position) === true) {
              markBoard(result.position, player);
              printBoard();
              if (checkWin(player) === true) {
                  console.log('Winner Winner!');
                  return;
              }
              if (player === 'X') {
                  playTurn('O');
              } else {
                  playTurn('X');
              }
          } else {
              console.log('incorrect input please try again...');
              playTurn(player);
          }
      });
  }

  console.log('Game started: \n' +
      ' 1 | 2 | 3 \n' +
      ' --------- \n' +
      ' 4 | 5 | 6 \n' +
      ' --------- \n' +
      ' 7 | 8 | 9 \n');


  playTurn('X');



  rl.close();
// });

//------------end of Human Player (ours):------------


// --------Board (ours): ----------
//=-----------ours: -----------------------

// // //draw board using arrays to assign positions
// // //let user type: jkl etc to access each cell of tictac arrays
//
// //--------------------------------
// const displayBoard = (mtx) => {
//   for (let i = 0; i < mtx.length; i++) {
//     console.log(mtx[i]);
//   }
// }
//
// let mtx = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
//
// displayBoard(mtx)
//
// //---------------------------------Max - diagonal ------------
//
// for (let i = 0; i<arr.length - 1; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !sameEl.includes(arr[i])) {     sameEl.push(arr[i])
//     }
//   }}
//   console.log(sameEl);
//
//   */
//   //sum diagonals:let mtx = [  [1, 2, 3],  [4, 5, 6],  [7, 8, 9]]  function diagonalSum(matrix) {  let sum = 0;  for (let i = 0; i < mtx.length; i++) {    sum += mtx[i][i];    sum += mtx[i][mtx.length - 1 - i]  }  return sum}console.log(diagonalSum())


// ----------end of Board (ours)---------------------


//---------all Corey: ---------------

// corey:

const Board = require('./board.js');
const Board = require('./humanPlayer.js');

class Game { //to be passed in by user = constructor inputs/args)
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2
    this.board = new Board();
    this.currentPlayer = this.player1;
  }

  play() {
    this.giveDirection()
    while(!this.board.isGame over()){
      let mover = this.currentPlaryer.getMove()
      if (this.board.isvalid mover(move)) {
        this.board.makeMover(move, thisCurrentPlayer.sym)
      }
      this.switchPlayers()
    }
  }

  getMove() {

  }

  logWinnerOrTie() {

  }

  giveDirection() {

  }

  switchPlayers() {

  }


}

//-------------------------
const readlineSync = require ('readline-sync');

class HumanPlayer {
  constructor(sym, name) {
    this.name = name;
    this.sym = sym;
  }

  getMove() {

  }

}
// other file:----------------

class Board {
  constructor () {
    this.grid = [[1,2,3], [4,5,6], [7,8,9]];
  }

  this.grid[2][0] = "X"

  display() {
    this.printRow(this.grid[0]);
    this.printLine();
    this.printRow(this.grid[1]);
    this.printLine();
    this.printRow(this.grid[2])
  }

  printRow(row) {
    console.log(); row.join(" | ")
  }

  printLine() {
    console.log("-------------");
  }


  //boolean: true false:
  isGameOver() {

  }

  findWinner() {

  }


  isValidMove(position) {

  }

  placeMark(position, sym)

}

module.export = Board;
//-----------------end of Corey (all) ------------------
