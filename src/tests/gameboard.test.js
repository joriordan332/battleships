import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

    test('to see if a 2d gameboard is produced by the for loop', () => {
        const newGameboard = new Gameboard();
        expect(newGameboard.createGameboard().length).toBe(10);
        expect(newGameboard.createGameboard()[0].length).toBe(10);
    });

    test('to check a ship has been placed at specific coordinates', () => {
        const board = new Gameboard();
        const admiral = new Ship(2);
        let x = 1;
        let y = 2;
        board.placeShip(admiral, x, y);
        expect(board.getGameBoard()[2][1]).toEqual({
            shipName: admiral
        });
        expect(board.getGameBoard()[3][1]).toEqual({
            shipName: admiral
          });
    })

    