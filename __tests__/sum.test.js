// This is the basic formatting
// To run, go the console and type 'npm test'

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})
