//! Description ============>


//?  instruction ===============>
//? TAfter you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

//* Solve problem

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers","Hello  nayem","Rahim"]
  };
  
  let ff = myDog.friends[2];
  console.log(ff);
  myDog.name = "Happy Coder";