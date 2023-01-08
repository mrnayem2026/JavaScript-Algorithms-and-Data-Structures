//**  Description Below Highlight to red color ===============>

//*! The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
//*! The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.



//*? instruction Below Highlight to red color ===============>

//*! Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

//* sovle this problem 

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  testLogicalOr(0);
  testLogicalOr(9);
  testLogicalOr(10);
  testLogicalOr(19);
  testLogicalOr(20);
  testLogicalOr(21);
  testLogicalOr(25);