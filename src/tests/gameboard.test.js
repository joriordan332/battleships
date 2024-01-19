import { Gameboard } from '../gameboard';

    const newGameboard = new Gameboard();
    test('to see if a 2d gameboard is produced by the for loop', () => {
        expect(newGameboard.createGameboard().length).toBe(10);
        expect(newGameboard.createGameboard()[0].length).toBe(10);
    });