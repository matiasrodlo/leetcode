/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  let word = [];
  for (let i = x.length - 1; i >= 0; i--) {
    word.push(x[i]);
  }
  return word.join("").toLowerCase() == x.toLowerCase(); //=== x
}

isPalindrome("Bob");
