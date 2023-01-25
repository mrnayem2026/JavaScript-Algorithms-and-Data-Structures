//**  Description Below Highlight to red color ===============>
//*! if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained


//* sovle this problem 

function testSize(num) {
    if(num < 5)
    {
      return "Tiny";
    } else if (num < 10)
    {
      return "Small";
    }else if (num < 15)
    {
       return "Medium";
    }else if (num < 20)
    {
      return "Large";
    } else if (num >= 20)
    {
      return "Huge";
    } else
    {
        return "Change Me";
    }

  }
  
  testSize(0);
  testSize(4);
  testSize(5);
  testSize(8);
  testSize(10);
  testSize(14);
  testSize(15);
  testSize(17);
  testSize(20);
  testSize(25);
  
  
  