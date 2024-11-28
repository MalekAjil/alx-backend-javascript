var assert = require('assert');
describe('a', 'b', function () {
    describe('#calculateNumber', function () {
        it('should return the sum of rounded numbers', function () {
	    assert.equal(calculateNumber(1.1, 2.2), 3);
	});
    });
});
