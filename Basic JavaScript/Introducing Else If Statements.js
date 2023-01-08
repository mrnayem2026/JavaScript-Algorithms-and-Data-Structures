//**  Description Below Highlight to red color ===============>
//*!If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

//*? instruction Below Highlight to red color ===============>
//*! Convert the logic to use else if statements.

//* sovle this problem 

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
   else if (val < 5) {
      return "Smaller than 5";
    }else{
      return  "Between 5 and 10";
    }
  
  
  }
  
  testElseIf(7);
  testElseIf(0);
  testElseIf(5);
  testElseIf(10);
  testElseIf(12);
  
  