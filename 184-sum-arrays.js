/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
  let arrSort = arr.sort((a, b) => b - a);

  if (!arrSort || arrSort.length == 1) {
    return 0;
  } else {
    return arrSort[0] - arrSort[1] + (arrSort[1] - arrSort[2]);
  }
}
