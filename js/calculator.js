var Calculator = (function(){

    //Get the display number
    var dispElem = document.getElementById("display");

    var value1 = ""; //empty string
    var value2 = ""; //empty string
    var valueFlag = 1; //Start on the first value of the eqn
    var currentBtnNum;
    var decimalCount = 0;
    var equation = "";
    var result = 0;
    //////////////////////////////////////////////////////

    //Functions
    //Check if the values are empty, if so, do not allow operators to start
    function checkEmptyString(){
        if(valueFlag === 1 && value1 === ""){

            dispElem.innerHTML = "";
            return true;
        }
        else if(valueFlag === 2 && value2 === ""){
            dispElem.innerHTML = "";  
            return true;
        }
        //Else if values are not empty, allow the operator to be chosen
        else{
            return false;
        }
    }

    //currentValue function stores the current number as the first or second value. The flag indicates which value the user is on.
    function currentValue(currentBtnNum){
        console.log("valueFlag: " + valueFlag);
        //If this is the first value of the eqn
        if(valueFlag === 1){
            value1 += currentBtnNum;
            return value1;
        }
        //Else this is the 2nd value of the eqn
        else if(valueFlag === 2){
            value2 += currentBtnNum;
            return equation + value2;
        }
    }

    function currentOperator(currentBtnOpr){
        //If this is the first value of the eqn
        if(valueFlag === 1){
            equation = equation + value1 + currentBtnOpr;

            //Change the flag value to 2 now that an operator is selected
            console.log("valueFlag = 2 now!")
            valueFlag = 2;
            value2 = "";

            //Reset decimalCount
            decimalCount = 0;

            return equation;
        }
        //Else this is the 2nd value of the eqn
        else if(valueFlag === 2){
            equation = equation + value2 + currentBtnOpr;

            //Change the flag value back to 1 now that an operator is selected
            console.log("valueFlag = 1 again!")
            valueFlag = 1;
            value1 = "";

            //Reset decimalCount
            decimalCount = 0;

            return equation;
        }
    }

    //Operator Functions
    //Get the selected operator and set it as the currentBtnOpr
    var operatorElem = document.getElementsByClassName("operator");
    for(var i=0; i<operatorElem.length; i++){
        operatorElem[i].addEventListener('click', operatorFunc);
    }

    function operatorFunc(){
        if(!checkEmptyString()){
            currentBtnOpr = this.value;
            console.log("current operator: " + currentBtnOpr);
            dispElem.innerHTML = currentOperator(currentBtnOpr);
        }
    }

    //When the equal button is pressed, evaluate the problem and display the result
    var equalBtn = document.getElementById("equal");
    equalBtn.addEventListener("click", getResult);

    function getResult(){
        //Convert the value strings to numbers
        console.log(value1 + ", type: " + typeof value1);
        value1Num = Number(value1);
        console.log("value1Num: " + value1Num + ", type: " + typeof value1Num);

        console.log(value2 + ", type: " + typeof value2);
        value2Num = Number(value2);
        console.log("value2Num: " + value2Num + ", type: " + typeof value2Num);

        switch(currentBtnOpr){
            case "+" :
                result = value1Num + value2Num;
                dispElem.innerHTML = result;
                console.log("result: " + result);
                break;
            case "-" :
                result = value1Num - value2Num;
                dispElem.innerHTML = result;
                console.log("result: " + result);
                break;
            case "x" :
                result = value1Num * value2Num;
                dispElem.innerHTML = result;
                console.log("result: " + result);
                break;
            case "÷" :
                result = value1Num / value2Num;
                dispElem.innerHTML = result;
                console.log("result: " + result);
                break;
            default :
                console.log("error");
        }
    }

    var clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", clearAll);

    function clearAll(){
        console.log("Resetting everything!!! CLEARRRRR")
        //Reset all variables to prepare for next equation
        dispElem.innerHTML = "0";
        value1 = "";
        value2 = "";
        valueFlag = 1;
        decimalCount = 0;
        equation = "";
        result = 0;
    }
    
    /*------------------------------------------------------------*/

    //Number functions
    //Double Zero
    var Btn00 = document.getElementById("num00");
    Btn00.addEventListener("click", print00);

    function print00(){
        console.log("00");
        //If user selects zeros for the first value, only print the zeros, do not add to the string. User needs to press any other number first to add zeros to the string
        if(valueFlag === 1 && value1 === ""){
            dispElem.innerHTML = "00";
        }
        else if(valueFlag === 2 && value2 === ""){
            dispElem.innerHTML = "00";  
        }
        else{
            currentBtnNum = "00";
            dispElem.innerHTML = currentValue(currentBtnNum);
        }
    }

    //Zero
    var Btn0 = document.getElementById("num0");
    Btn0.addEventListener("click", print0);

    function print0(){
        console.log("0");

        //If user selects zeros for the first value, only print the zeros, do not add to the string. User needs to press any other number first to add zeros to the string
        if(valueFlag === 1 && value1 === ""){
            dispElem.innerHTML = "0";
        }
        else if(valueFlag === 2 && value2 === ""){
            dispElem.innerHTML = "0";  
        }
        else{
            currentBtnNum = "0";
            dispElem.innerHTML = currentValue(currentBtnNum);
        }
    }

    //One
    var Btn1 = document.getElementById("num1");
    Btn1.addEventListener("click", print1);

    function print1(){
        console.log("1");
        currentBtnNum = "1";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Two
    var Btn2 = document.getElementById("num2");
    Btn2.addEventListener("click", print2);

    function print2(){
        console.log("2");
        currentBtnNum = "2";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Three
    var Btn3 = document.getElementById("num3");
    Btn3.addEventListener("click", print3);

    function print3(){
        console.log("3");
        currentBtnNum = "3";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Four
    var Btn4 = document.getElementById("num4");
    Btn4.addEventListener("click", print4);

    function print4(){
        console.log("4");
        currentBtnNum = "4";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Five
    var Btn5 = document.getElementById("num5");
    Btn5.addEventListener("click", print5);

    function print5(){
        console.log("5");
        currentBtnNum = "5";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Six
    var Btn6 = document.getElementById("num6");
    Btn6.addEventListener("click", print6);

    function print6(){
        console.log("6");
        currentBtnNum = "6";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Seven
    var Btn7 = document.getElementById("num7");
    Btn7.addEventListener("click", print7);

    function print7(){
        console.log("7");
        currentBtnNum = "7";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Eight
    var Btn8 = document.getElementById("num8");
    Btn8.addEventListener("click", print8);

    function print8(){
        console.log("8");
        currentBtnNum = "8";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }
    //Nine
    var Btn9 = document.getElementById("num9");
    Btn9.addEventListener("click", print9);

    function print9(){
        console.log("9");
        currentBtnNum = "9";
        dispElem.innerHTML = currentValue(currentBtnNum);
    }

    //Decimal
    var BtnDecimal = document.getElementById("decimal");
    BtnDecimal.addEventListener("click", printDecimal);

    function printDecimal(){
        console.log(".");
        //If no decimal has been added yet, allow user to add it in the value
        if(decimalCount === 0){
            decimalCount = 1;
            currentBtnNum = ".";
            dispElem.innerHTML = currentValue(currentBtnNum);
        }
    }

///////////////////////////////////////////////


}());