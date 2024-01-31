/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (!Number.isInteger(Number(pin[i])) || /\s/.test(pin)) {
        return false; // If any character is not a digit or there is whitespace, return false
      }
    }
    return true; // All characters are valid digits
  }

  return false; // PIN length is neither 4 nor 6
}

validatePIN("123 ");
