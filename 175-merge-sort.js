function mergeArrays(arr1, arr2) {
  let newList = arr1.concat(arr2);
  newList.sort((a, b) => a - b);

  let sortList = [];
  for (let i = 0; i < newList.length; i++) {
    if (newList[i] !== newList[i + 1]) {
      sortList.push(newList[i]);
    }
  }
  return sortList;
}

mergeArrays([7, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
