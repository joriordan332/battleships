import { Player } from '../player';
import { Ship } from '../ship';
import { Gameboard } from '../gameboard';

test('to see if each time a game starts the player who takes the first turn is random', () => {
    const player1 = new Player();
    const computer = new Player();
    expect(computer.randomFirstTurn()).toBe('player1' || 'computer')
});

test('Object:', () => {
    const player1 = new Player('player1', 'true');
    expect(player1.turn).toBe('true')
});

test('see if our random computer function coordinate is working ', () => {
    const computer = new Player()
    computer.attacks.push({x: 0, y: 0})
    for (let i = 0; i < 99; i += 1) computer.computerMoves()
    expect(computer.attacks.length).toBe(100);
    expect(computer.computerMoves()).toBe(false);
});



