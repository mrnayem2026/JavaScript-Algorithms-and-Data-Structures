// Description ============>

// The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

//  instruction ===============>
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
    if (val >= 20 ) {  
      return "20 or Over";
    }
  
    if (val >= 10) { 
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(0);
  testGreaterOrEqual(9);
  testGreaterOrEqual(10);
  testGreaterOrEqual(11);
  testGreaterOrEqual(19);
  testGreaterOrEqual(100);
  testGreaterOrEqual(21);
  
