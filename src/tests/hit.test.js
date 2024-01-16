const hit = require('../hit.js');

    test('hits taken increases by one', () => {
        expect(hit(0)).toEqual(1);
    });
;