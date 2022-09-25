/* Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */

const array = [33, 50, 79, 78, 90, 101, 30];
const mulOfTen = array.find((num) => num % 10 == 0);
console.log(mulOfTen);