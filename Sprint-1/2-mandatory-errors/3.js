const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working 
// Before running the code, make and explain a prediction about why the code won't work: My prediction is that the code won't work because of the slice function. 
// Then run the code and see what error it gives: It gives a TypeError: cardNumber.toString is not a function. 
// Consider: Why does it give this error? Is this what I predicted? If not, what's different? Because .slice is used for strings, and cardNumber is a number. 
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
