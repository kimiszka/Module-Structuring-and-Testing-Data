const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // 6

// b) How many function calls are there?
    // 1

// c) Using documentation, explain what the expression movieLength % 60 represents
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // It uses the remainder operator. It divides the movieLength by 60 and gives back the number of seconds left over after the full minutes. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //We are getting the value of totalMinutes by subtracting the remainingSeconds from movieLength and dividing the result by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // It represents the totalHours, remainingMinutes, and remainingSeconds. 
    // runningTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // Yes. It works with different movieLength values because the code uses division and the remainder operator (%) to automatically calculate the hours, minutes, and seconds, regardless of how long the movie is.