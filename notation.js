const student = {
    name: 'unknown',
    age: 15,
    class: 'Ten',
    marks: {
        math: 50,
        physics: 60,
        chemistry: 93,
    },
}

// . dot notation:
// const mathMarks = student.marks.math;

//bracket [] notation:
const mathMarks = student['marks']['math'];
console.log(mathMarks);