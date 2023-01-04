// Description ============>

// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

//  instruction ===============>
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val >  100) { 
      return "Over 100";
    }
  
    if (val > 10 ) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(0);
  testGreaterThan(10);
  testGreaterThan(11);
  testGreaterThan(99);
  testGreaterThan(100);
  testGreaterThan(101);
  testGreaterThan(150);