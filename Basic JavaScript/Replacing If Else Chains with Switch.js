//**  Description Below Highlight to red color ===============>

//*! If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:




//* sovle this problem 

function chainToSwitch(val) {
    let answer = "";


    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}


chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);
chainToSwitch(7);
chainToSwitch("John");
chainToSwitch(156);
