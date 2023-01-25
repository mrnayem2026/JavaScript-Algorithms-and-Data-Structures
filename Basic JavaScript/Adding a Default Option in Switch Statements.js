//**  Description Below Highlight to red color ===============>

//*! In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain. A default statement should be the last case.




//* sovle this problem 

function switchOfStuff(val) {
    let answer = "";
   
   switch(val) {
     case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
  
   }
  
  
  
    
    return answer;
  }
  
  switchOfStuff("a");
  switchOfStuff("b");
  switchOfStuff("c");
  switchOfStuff("d");
  switchOfStuff(4);
  