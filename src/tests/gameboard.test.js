import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

    test('to see if a 2d gameboard is produced by the for loop', () => {
        const newGameboard = new Gameboard();
        expect(newGameboard.createGameboard().length).toBe(10);
        expect(newGameboard.createGameboard()[0].length).toBe(10);
    });

    test('to check a ship has been placed at specific coordinates', () => {
        const newGameboard = new Gameboard();
        const admiral = new Ship(2);
        let x = 1;
        let y = 2;
        newGameboard.placeShip(admiral, x, y);
        expect(newGameboard.getGameBoard()[2][1]).toEqual({
            shipName: admiral
        });
        expect(newGameboard.getGameBoard()[3][1]).toEqual({
            shipName: admiral
          });
    })

    test("gameboard can receieve attack when there is a ship", () => {
        const newGameboard = new Gameboard();
        const admiral = new Ship(2);
        newGameboard.placeShip(admiral, 0, 0);
        expect(newGameboard.receiveAttack(0, 0)).toBe(1)
        });
  


    