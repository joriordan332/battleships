import { Gameboard } from '../gameboard';
import { Ship } from '../ship';
import { Player } from '../player';

test('to see if each time a game starts the player who takes the first turn is random', () => {
    const player = new Player();
    const computer = new Player();
    expect(player.randomFirstTurn()).toBe('player' || 'computer')
})