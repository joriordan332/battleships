export class Player {
    constructor(name) {
        this.player = name
    }

    randomFirstTurn() {
        const options = ['player', 'computer']
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
    }
}