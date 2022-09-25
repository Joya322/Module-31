/* You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

const oddArray = [1, 3, 5, 7, 9];
const evenArray = [];
//using for of loop
for (number of oddArray) {
    evenArray.push(number + 1);
}
console.log(evenArray);

//using map
const evenArrayByMap = oddArray.map(num => num + 1);
console.log(evenArrayByMap);