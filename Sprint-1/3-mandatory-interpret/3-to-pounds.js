const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 3. substring(0, penceString.length - 1): takes the text from the beginning, but stop one character before the end. This results to removing or cutting off the last character, "p". 

// 8. padStart() add zeros to the beginning if the string has fewer than 3 characters. padStart(3, "0") then makes sure the text is at least 3 characters long by adding zeros at the front. 

// 9. substring(length -2) returns all characters except the final two. The result is "3".

// 14. substring(paddedPenceNumberString.length - 2): returns the characters from the end of the string which are the last two digits.  padEnd(2, "0"): ensures the result is exactly two characters long by adding zeros at the end if needed. 

// 18. console.log(`£${pounds}.${pence}`); : Joins the pieces together with a £ at the front and a . between pounds and pence. Result: £3.99.