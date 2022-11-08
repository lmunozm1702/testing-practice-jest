const calc = require('./calculator')

describe('my calc - add', () => {
  test('add-1', () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test('add-2', () => {
    expect(calc.add(0, 3)).toBe(3);
  });

  test('add-3', () => {
    expect(calc.add(-3, 3)).toBe(0);
  });
});

describe('my calc - subtract', () => {
  test('add-1', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  test('add-2', () => {
    expect(calc.subtract(0, 3)).toBe(-3);
  });

  test('add-3', () => {
    expect(calc.subtract(-3, 3)).toBe(-6);
  });
});

describe('my calc - divide', () => {
  test('add-1', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });

  test('add-2', () => {
    expect(calc.divide(0, 3)).toBe(0);
  });

  test('add-3', () => {
    expect(calc.divide(3, 0)).toBe(Infinity);
  });
});

describe('my calc - multi', () => {
  test('add-1', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  test('add-2', () => {
    expect(calc.multiply(0, 3)).toBe(0);
  });

  test('add-3', () => {
    expect(calc.multiply(-3, 2)).toBe(-6);
  });
});