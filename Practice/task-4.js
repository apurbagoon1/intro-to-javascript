// // Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

var a = isNaN('11');
console.log(a);

// // Explanation:
// The function isNaN() checks whether the given value is Not a Number (NaN).
// The string '11' looks like a number.
// JavaScript automatically converts '11' into a number (11) before checking.
// Since 11 is a valid number, isNaN(11) returns false.

var a = isNaN(2-10);
console.log(a);

// // Explanation:
// 2 - 10 = -8.
// -8 is a valid number.
// Since isNaN(-8) checks if -8 is NaN (which it is not), it returns false.
