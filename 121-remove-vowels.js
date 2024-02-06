/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newString = [];
  let letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (letters[i].toLowerCase() !== vowels[j]) {
        newString.push(letters[i]);
      }
    }
  }
  return newString.join();
}

disemvowel("This website is for losers LOL! would become");
