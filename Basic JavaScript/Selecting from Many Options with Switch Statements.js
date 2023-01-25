//**  Description Below Highlight to red color ===============>

//*! If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.


//* sovle this problem 

function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";

    }


    return answer;
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);
