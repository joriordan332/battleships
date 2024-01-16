const hit = require('../hit');

    test('hits taken increases by one', () => {
        expect(hit(0)).toEqual(1);
    });
;