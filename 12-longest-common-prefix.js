/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z. */

function longInt(sentence) {
  // Initialize the reference with the first string
  let ref = sentence[0];

  // Iterate over the characters of the first string
  for (let i = 0; i < ref.length; i++) {
    // Iterate over the rest of the strings in the array
    for (let j = 1; j < sentence.length; j++) {
      // Check if the current character matches in all strings
      if (sentence[j][i] !== ref[i]) {
        // If there's a mismatch, update the reference and break the loop
        ref = ref.slice(0, i);
        break;
      }
    }
  }

  return ref;
}

console.log(longInt(["hoolas", "houli", "hoolaa"]));
