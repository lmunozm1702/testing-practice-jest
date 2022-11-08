const reverseStr = require('./reverse-string');

test('hello', () => {
  expect(reverseStr('hello')).toBe('olleh');
});

test('hello', () => {
  expect(reverseStr('Howdy')).toBe('ydwoH');
});

test('hello', () => {
  expect(reverseStr('Greetings from Earth')).toBe('htraE morf sgniteerG');
});
