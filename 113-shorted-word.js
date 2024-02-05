/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  let string = s.split(" ");
  let wordLength = [];

  for (let i = 0; i < string.length; i++) {
    wordLength.push(string[i].length);
  }

  let arrayOrder = wordLength.sort((a, b) => a - b);

  return arrayOrder[0];
}

findShort("BTC Ripple Monero ProofOfStake MadeSafeCoin Mine Factom Mine BTC");
