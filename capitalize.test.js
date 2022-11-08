const capitalize = require('./capitalize')

test('hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('int 100', () => {
  expect(capitalize(100)).toBe('100');
});

test('1 letter', () => {
  expect(capitalize('a')).toBe('A');
});

test('void', () => {
  expect(capitalize('')).toBe('');
});