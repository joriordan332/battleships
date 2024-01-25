import { Ship } from './ship';
export class Gameboard {
    constructor() {
      this.gameBoardArray = this.createGameboard();
    }

    createGameboard() {
        let arr = [];
        let arrayItem = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              arrayItem.push({ shipName: undefined});
            }
            
            arr.push(arrayItem);
            console.log(arr)
            arrayItem = [];
            
          }
        return arr
    }

    getGameBoard() {
      return this.gameBoardArray;
    }

    placeShip(ship, x, y) {
      for (let i = 0; i < ship.length; i++) {
        this.gameBoardArray[y + i][x].shipName = ship;
      }
    }

}