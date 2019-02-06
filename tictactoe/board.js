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


let board = new Board();
module.exports = Board;
