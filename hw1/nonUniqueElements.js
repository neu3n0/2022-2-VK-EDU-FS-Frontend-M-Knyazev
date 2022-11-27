/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  if (!Array.isArray(data)) return false;
  let mp = new Map();
  for (let i = 0; i < data.length; ++i) {
    if (mp.has(data[i]))
      mp.set(data[i], mp.get(data[i]) + 1);
    else
      mp.set(data[i], 1);
  }

  // it's better in time, but worse in memory due to the extra array
  let ans = [];
  for (let i = 0; i < data.length; ++i)
    if (mp.get(data[i]) > 1) ans.push(data[i])
  return ans;

  // it's better in memory due to inline removal of elements, but worse in time due to copying part of the array when removing an element
  // for (let j = 0; j < data.length; ++j) {
  //   if (mp.get(data[j]) == 1) {
  //     data.splice(j, 1);
  //     --j;
  //   }
  // }
  // return data;

}