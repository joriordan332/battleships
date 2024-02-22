import { Gameboard } from './gameboard';
export class Player {
    constructor(name, turn = false) {
        this.player = name
        this.turn = turn
        this.gameBoardArray = new Gameboard();
        this.attacks = []
    }

    randomFirstTurn() {
        const options = ['player1', 'computer']
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
    }

    createPlayer() {
        const player1 = new Player('player1', 'false');
        const computer = new Player('computer', 'false');
        let choice = this.randomFirstTurn();
        if (choice == 'player1') {
            player1.turn == 'true'
        } else {
            computer.turn = 'true'
        }
    }

    currentTurn(computer) {
        turn = true;
        computer.turn.set(false);
    }

 

    computerMoves() {
        if (this.attacks.length === 100) return false;
        const cords = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        if (this.uniqueCoordinates(cords)) {
          this.attacks.push(cords);
          return cords;
        }
        return this.computerMoves();
    }

    uniqueCoordinates(coordinates) {
        for (let i = 0; i < this.attacks.length; i += 1)
      if (this.isEqual(this.attacks[i], coordinates)) return false;
    return true;
    }

    isEqual = (a, b) => a[0] === b[0] && b[1] === a[1];

    
}

