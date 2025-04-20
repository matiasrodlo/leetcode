/* Problem
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] **is a list of all *distinct* integers in** nums1 **which are *not* present in** nums2.

answer[1] **is a list of all *distinct* integers in** nums2 **which are *not* present in** nums1.

Note that the integers in the lists may be returned in any order.

  Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6]. */

function findIn(str1, str2) {
  let newStr1 = [];
  let newStr2 = [];

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      newStr1.push(str1[i]);
    }
    if (!str1.includes(str2[i])) {
      newStr2.push(str2[i]);
    }
  }
  return [newStr1, newStr2];
}

console.log(findIn([1, 2, 3], [2, 4, 6]));
