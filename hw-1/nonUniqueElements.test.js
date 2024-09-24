import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
})

test('Выбрасывает TypeError для неправильного типа данных', () => {
  expect(() => nonUniqueElements(-1)).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(['string'])).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(true)).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(null)).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(undefined)).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements([true])).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements({})).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(NaN)).toThrow('Input must be an array of integers.');
  expect(() => nonUniqueElements(Infinity)).toThrow('Input must be an array of integers.');
});