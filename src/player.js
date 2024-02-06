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

    legalMove(x, y) {
        if(this.gameBoardArray[x] || this.gameBoardArray[y] < 0) {
            return false
        }
        if (this.gameBoardArray[x] || this.gameBoardArray[y] > 9) {
            return false
        }
        else {
            return true
        }
    }

    computerMoves() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        this.attacks.push({x: x, y: y})
    return [x, y];
    }
}