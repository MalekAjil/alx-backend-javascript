const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return 6 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when inputs are 1.4 and 4.5', function() {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });

  it('should return Error when inputs are 1.4 and 0', function() {
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal('Error');
  });
});
