//**  Description Below Highlight to red color ===============>

//*! When a return statement is reached, the execution of the current function stops and control returns to the calling location.




//* sovle this problem 

function abTest(a, b) {

    if (a<0 || b<0)
    {
      return undefined;
    }
  
  
   
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
  abTest(-2, 2);
  abTest(2, -2);
  abTest(2, 8);
  abTest(3, 3);
  abTest(0, 0);