/*
Problem
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2

Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4 */

function find(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return i;
    } else if (array[i] > num) {
      return i;
    }
  }
  return array.length;
}

console.log(find([1, 3, 5, 6, 6], 51));
