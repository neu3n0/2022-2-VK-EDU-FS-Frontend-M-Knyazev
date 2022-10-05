import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
  expect(nonUniqueElements([1, 0, 2, 3, 1, 2, 3, 0])).toEqual([1, 0, 2, 3, 1, 2, 3, 0]);
  expect(nonUniqueElements([0])).toEqual([]);
  expect(nonUniqueElements([0, 0])).toEqual([0, 0]);
  expect(nonUniqueElements([-1, -4, 1, -1])).toEqual([-1, -1]);
  expect(nonUniqueElements([0, 0, 'ar', 'ar', 'l'])).toEqual([0, 0, 'ar', 'ar']);
  expect(nonUniqueElements([0, 0, 'ar', 'ar', 'l', undefined])).toEqual([0, 0, 'ar', 'ar']);
  expect(nonUniqueElements([0, 0, 'ar', 'ar', 'l', undefined, undefined])).toEqual([0, 0, 'ar', 'ar', undefined, undefined]);
  expect(nonUniqueElements([true, false, true])).toEqual([true, true]);
  expect(nonUniqueElements(0)).toEqual(false);
  expect(nonUniqueElements(undefined)).toEqual(false);
  expect(nonUniqueElements([])).toEqual([]);
})