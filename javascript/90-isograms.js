/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/

function isIsogram(str) {
  let letters = str.toLowerCase().split("");
  let checked = [];

  for (let i = 0; i < letters.length; i++) {
    if (!checked.includes(letters[i])) {
      checked.push(letters[i]);
    } else {
      return false; // Return false if a duplicate is found
    }
  }

  return true; // Return true if no duplicates are found
}

isIsogram("Dermaataaoglyphics");
