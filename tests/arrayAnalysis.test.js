import ArrayAnalysis from '../src/arrayAnalysis';

test('Returns an object', () => {
  const object = ArrayAnalysis.arrAnalysis([1,8,3,4,2,6]);
  expect(typeof object).toBe('object');
});