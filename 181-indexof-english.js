/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

function spEng(text) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowerText = text.toLowerCase();

  // Find the first occurrence of "english"
  const englishIndex = lowerText.indexOf("english");

  // Check if the index is valid and there are no other occurrences before it
  return (
    englishIndex >= 0 &&
    englishIndex === lowerText.indexOf("english", englishIndex)
  );
}
