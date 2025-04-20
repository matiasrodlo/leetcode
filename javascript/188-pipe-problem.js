/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers) {
  let minNum = numbers[0];
  let maxNum = numbers.length; // Use actual length

  let listNum = [];

  for (let i = minNum - 1; i < maxNum - 1; i++) { // Decrement by 1 again
    listNum.push(numbers[i] + 1); // Add 1 to each element
  }
  return listNum;
}

*/

function pipeFix(numbers) {
  // Handle empty list case
  if (!numbers.length) {
    return [];
  }

  const min = numbers[0];
  const max = numbers[numbers.length - 1];

  // Create the fixed list with an ascending sequence
  const fixedList = [];
  for (let i = min; i <= max; i++) {
    fixedList.push(i);
  }
  return fixedList;
}

pipeFix([1, 2, 3, 5, 6, 8, 9]);

//[1,2,3,4,5,6,7,8,9]
