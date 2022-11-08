const stringLength = require('./string-length')

it('works', () => {

})

it('normal-word', () => {
  expect(stringLength('hello')).toBe(5);
})

it('void-word', () => {
  expect(() => stringLength('')).toThrow(/Check fail: invalid string length/);
})

it('eleven-word', () => {
  expect(() => stringLength('Once a time')).toThrow(/Check fail: invalid string length/);
})
