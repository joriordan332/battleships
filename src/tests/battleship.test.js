import { Ship } from '../ship';
    const admiral = new Ship(3);
    test('hits taken increases by one', () => {
        expect(admiral.hit(0)).toEqual(1);
    });

    test('calculate whether a ship which is 4 squares in length and has taken 4 hits is considered sunk', () => {
        expect(admiral.isSunk(4, 4)).toBeTruthy();
    });

    test('calculate whether a ship which is 2 squares in length but only taken 1 hit is considered not to be sunk', () => {
        expect(admiral.isSunk(2, 1)).toBeFalsy();
    });
;