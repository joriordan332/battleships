const isSunk = require('../isSunk');

    test('calculate whether a ship which is 4 squares in length and has taken 4 hits is considered sunk', () => {
        expect(isSunk(4, 4)).toBeTruthy();
    });

    test('calculate whether a ship which is 2 squares in length but only taken 1 hit is considered not to be sunk', () => {
        expect(isSunk(2, 1)).toBeFalsy();
    });