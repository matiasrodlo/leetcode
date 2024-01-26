/* Problem
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(string, target) {
  let diff = [];

  // Step 1: Calculate differences and store them in the 'diff' array
  for (let i = 0; i < string.length; i++) {
    diff.push(target - string[i]);
  }

  // Step 2: Iterate through the 'diff' array to find pairs that add up to the target
  for (let j = 0; j < diff.length; j++) {
    for (let k = j + 1; k < diff.length; k++) {
      if (diff[j] + diff[k] === target) {
        return [j, k];
      }
    }
  }

  // If no solution is found, return an appropriate value
  return "No solution found";
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
