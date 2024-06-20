/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/

function capitalize(s) {
  let evenSentence = [];
  let oddSentence = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenSentence.push(s[i].toUpperCase());
    } else {
      evenSentence.push(s[i].toLowerCase());
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      oddSentence.push(s[i].toLowerCase());
    } else {
      oddSentence.push(s[i].toUpperCase());
    }
  }

  return [evenSentence.join(""), oddSentence.join("")]; // Join characters after the loop
}

console.log(capitalize("abcdef")); // Output: AbCdEf
console.log(capitalize("hello")); // Output: HlLo
