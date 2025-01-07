import Building from './5-building.js';

class TestBuilding extends Building {}

test('building forces override', () => {
  expect(() => {
    new TestBuilding(200);
  }).toThrow('Class extending Building must override evacuationWarningMessage');
});
