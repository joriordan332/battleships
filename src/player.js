import { Gameboard } from './gameboard';
export class Player {
    constructor(name, turn = false) {
        this.player = name
        this.turn = turn
        this.gameboard = new Gameboard();
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
     console.log(computer.turn)
     console.log(player1.turn)
    }

}