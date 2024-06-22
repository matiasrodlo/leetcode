function isSortedAndHow(array) {
  // Avoid modifying the original array
  const originalArray = [...array];

  // Efficiently check for sorted order using a single loop
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < originalArray.length; i++) {
    if (originalArray[i] < originalArray[i - 1]) {
      isAscending = false; // Not ascending if current < previous
    }
    if (originalArray[i] > originalArray[i - 1]) {
      isDescending = false; // Not descending if current > previous
    }

    // Early termination if both flags are false (not sorted)
    if (!isAscending && !isDescending) {
      break;
    }
  }

  if (isAscending) {
    return "yes, ascending";
  } else if (isDescending) {
    return "yes, descending";
  } else {
    return "no";
  }
}

console.log(isSortedAndHow([40, 2, 30])); // Output: no
console.log(isSortedAndHow([1, 2, 3])); // Output: yes, ascending
console.log(isSortedAndHow([3, 2, 1])); // Output: yes, descending
console.log(isSortedAndHow([1, 1, 1, 1])); // Output: no (not strictly ascending or descending)
