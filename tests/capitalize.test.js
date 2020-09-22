import StringOperations from '../src/capitalize';

test('capitalizes the first letter in the sentence "hello world"', () => {
  expect(StringOperations.capitalize('hello')).toBe('Hello');
});

test('reverses the string "hello"', () => {
  expect(StringOperations.reverseString('hello world')).toBe('dlrow olleh');
});