const validParens = require('./valid-parens');

test("add a thing", () => {
  expect(validParens('()')).toBe(true);
});
