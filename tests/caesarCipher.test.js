import CaesarCipher from '../src/caesarCipher';

test('Encrypts the given string', () => {
  expect(CaesarCipher.encrypt('hello', 1)).toBe('ifmmp');
});

test('Encrypts the given string', () => {
  expect(CaesarCipher.encrypt('hello', 3)).toBe('khoor');
});
