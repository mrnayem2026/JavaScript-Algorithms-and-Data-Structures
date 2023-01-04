// Strict equality (===) is the counterpart to the equality operator (==). 


// Setup
function testStrict(val) {
    if (val === 7) {
       
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  testStrict(7);
  testStrict("7");