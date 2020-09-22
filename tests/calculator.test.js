import Calculator from '../src/calculator';

test('adds 2 + 2 to equal 4', () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

test('subtraction of 2 - 2 equal to 0', () => {
  expect(Calculator.subtract(2, 2)).toBe(0);
});

test('division of 2 / 2 equal to 1', () => {
  expect(Calculator.divide(2, 2)).toBe(1);
});

test('multiply of 2 * 2 to equal 4 ', () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
});