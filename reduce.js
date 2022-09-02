const numbers = [1, 2, 3, 4, 5];
/*
 structure:
  .reduce(accumulatorFunction, initialValue) 
  accumulatorFunction use two parameters
*/
const total = numbers.reduce((prev, current) => prev + current, 0);
console.log(total);
