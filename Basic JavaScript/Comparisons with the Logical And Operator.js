//** Description 

//Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

//*? instruction ===============>

// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

//* sovle this problem 

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    } 
    return "No";
  }
  
  testLogicalAnd(0);
  testLogicalAnd(24);
  testLogicalAnd(25);
  testLogicalAnd(30);
  testLogicalAnd(50);
  testLogicalAnd(51);
  testLogicalAnd(75);
  testLogicalAnd(80);