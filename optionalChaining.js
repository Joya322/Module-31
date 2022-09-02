//target to find user floor
const user = {
  id: 5001,
  name: "Jannatul Ferdoush",
  address: {
    street: {
      first: "727/A, Nakhalpara",
      second: "ground floor",
      third: "right side",
    },
  },
};

// const userFloor = user.address.street.second;
//it's called chaining

//if there have no value for a property then,

// const userFloor = user.address.stree.second;
// it will give an error.because there stree is undefined and then we want to find value of stree by second. so it will give an error.

//if we want to see that if there are no value for stree then the chain will stop. then we can use optional chaining

const userFloor = user.address.stree?.second;
//it will show undefined

console.log(userFloor);