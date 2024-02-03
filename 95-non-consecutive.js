function firstNonConsecutive(arr) {
  // Sort the array in ascending order
  let orderArr = arr.sort((a, b) => a - b);
  let consecutive = [];

  // Generate an array of consecutive numbers starting from the first element of the sorted array
  for (let i = 0; i < arr.length; i++) {
    consecutive.push(orderArr[0] + i);
  }

  // Compare each element of the sorted array with the corresponding element in the consecutive array
  for (let j = 0; j < arr.length; j++) {
    if (orderArr[j] !== consecutive[j]) {
      return orderArr[j];
    }
  }

  // If the loop completes without finding a non-consecutive element, return null
  return null;
}

const result = firstNonConsecutive([1, 2, 3, 9, 6, 7, 8]);
console.log(result); // Output: 9
