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

test('make sure the computer can only make valid moves', () => {
    const newGameboard = new Gameboard();
    expect(newGameboard.legalMove(20, 0)).toBe(false);
    expect(newGameboard.legalMove(9, 0)).toBe(true);
})