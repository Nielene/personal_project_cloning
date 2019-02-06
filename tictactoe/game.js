// corey:
let readlineSync = require('readline-sync');
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

// //-------------------------
// const readlineSync = require ('readline-sync');
//
// class HumanPlayer {
//   constructor(sym, name) {
//     this.name = name;
//     this.sym = sym;
//   }
//
//   getMove() {
//
//   }
//
// }
// // other file:----------------
//
// class Board {
//   constructor () {
//     this.grid = [[1,2,3], [4,5,6], [7,8,9]];
//   }
//
//   this.grid[2][0] = "X"
//
//   display() {
//     this.printRow(this.grid[0]);
//     this.printLine();
//     this.printRow(this.grid[1]);
//     this.printLine();
//     this.printRow(this.grid[2])
//   }
//
//   printRow(row) {
//     console.log(); row.join(" | ")
//   }
//
//   printLine() {
//     console.log("-------------");
//   }
//
//
//   //boolean: true false:
//   isGameOver() {
//
//   }
//
//   findWinner() {
//
//   }
//
//
//   isValidMove(position) {
//
//   }
//
//   placeMark(position, sym)
//
// }
//
// module.export = Board;
