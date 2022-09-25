/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

//using for of loop
const numbers = [1, 9, 17, 22];
let sum = 0;
for (number of numbers) {
    sum = sum + number;
}
console.log(sum);

//using reduce()
const summ = numbers.reduce((prev, current) => prev + current, 0);
console.log(summ);