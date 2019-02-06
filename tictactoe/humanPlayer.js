const readlineSync = require ('readline-sync');

class HumanPlayer {
  constructor(sym, name) {
    this.name = name;
    this.sym = sym;
  }

  getMove() {

  //   let move = [[1,2,3],[4,5,6],[7,8,9]]
  // if (move = position[0,0]) {
  //   return sym
  // } else if (move = position[0,1]) {
  //   return sym
  // } else if () {
  //   return sym
  // }

  let boardchar =
  { 1: [0,0],
    2: [0,1],
    3: [0,2],
    4: [1,0],
    5: [1,1],
    6: [1,2],
    7: [2,0],
    8: [2,1],
    9: [2,2],
  }





}

module.exports = HumanPlayer;
