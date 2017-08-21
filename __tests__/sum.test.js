// This is the basic formatting
// To run, go the console and type 'npm test'

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test with a normal callback
test('the data is peanut butter', done => {
  function callback(data){
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
})



// Promises
test('the data is peanut butter', () => {
  expect(assertions(1));

  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });

});

test("the fetch fails with an error", () => {
  expect.assertions(1);

  return fetchData().catch(e =>
    expect(e).toMatch('error')
  );
});



