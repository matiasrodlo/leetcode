/*
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/

function reverseLetter(str) {
  let letters = "";
  for (let char of str) {
    if (char.match(/[a-zA-Z]/)) {
      letters = char + letters; // Add character to the beginning for reversing
    }
  }
  return letters;
}

console.log(reverseLetter("krishan")); // Output: "nahsirk"
console.log(reverseLetter("ultr53o?n")); // Output: "nortlu"
