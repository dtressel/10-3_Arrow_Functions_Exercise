// 1. 
// ES5 Map Callback:
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// ES2015 Arrow Functions Shorthand:
function double(arr) {
    return arr.map(val => val * 2);
  }

// 2.
// Old Code to Refactor:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
// }

// Refactored Code:
// Step 1 (change inner functions to => functions):
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(num => num ** 2);
//     var evens = squares.filter(square => square % 2 === 0);
//     return evens;
// }
// Step 2 (change outer function to => function by assigning to a variable
//      and daisy-chaining the map and filter function to turn into a single expression)
// Final Refactored code:
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);