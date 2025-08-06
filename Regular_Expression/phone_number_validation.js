let numbers = [
  "9876543210",         // valid
  "+91-9876543210",     // valid
  "+91 9876543210",     // valid
  "09876543210",        // valid
  "1234567890",         // invalid
  "+91-1234567890",     // invalid
  "98765",              // invalid
  "abcdefghij",         // invalid
];

numbers.forEach(number => {
  let regexnumber = /^(\+91[-\s]?|0)?[6-9][0-9]{9}$/;

  if (regexnumber.test(number)) {
    console.log(`${number} is valid`);
  } else {
    console.log(`${number} is not valid`);
  }
});

// Must be exactly 10 digits
// Must start with digits 6, 7, 8, or 9
// Can optionally start with +91, +91- or +91 (space)
// Can also optionally start with 0
// Should not contain alphabets or special characters
// No country code allowed other than +91
// No more than 10 digits (excluding prefix)
// No spaces between digits (except after +91 if allowed)
// No duplicate digits rule unless specified separately