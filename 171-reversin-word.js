/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/

function reverse(string) {
  let words = string.split(" ");
  let reverse = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(" ");
}
