import { Ship } from './ship';
export class Gameboard {
    constructor() {
      this.gameBoardArray = this.createGameboard();
      this.missedAttacks = []
    }

    createGameboard() {
        let arr = [];
        let arrayItem = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              arrayItem.push({ shipName: undefined});
            }
            arr.push(arrayItem);
            arrayItem = [];
          }
        return arr
    }

    getGameBoard() {
      return this.gameBoardArray;
    }

    chechIfShipPlacementIsValid(length, x, y) {
      if (x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10) {
        return false;
      } else {
        for (let i = y; i < y + length; i++) {
          if (this.gameBoardArray[i][x].shipName != undefined) {
            return false;
          } 
        }
        return true;
      }
    }

    placeShip(ship, x, y) {
      for (let i = 0; i < ship.length; i++) {
        this.gameBoardArray[y + i][x].shipName = ship;
      }
    }

    receiveAttack(x, y) {
      if (this.gameBoardArray[y][x].shipName != undefined) {
        this.gameBoardArray[y][x].shipName.hit();
        this.gameBoardArray[y][x] = true
        return 1
      }
      else {
        this.missedAttacks.push({x: x, y: y})
        this.gameBoardArray[y][x] = false
        return 0
      }
    }

    getMissedAttacksArray() {
      return this.missedAttacks;
    }

    checkIfAllShipsSunk() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (this.gameBoardArray[i][j].shipName != undefined) {
            return false
          }
          else return true
          } 
      }
    }
}