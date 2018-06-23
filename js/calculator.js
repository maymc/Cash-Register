(function(){

    //Get the display number
    var dispElem = document.getElementById("display");
    var value1 = ""; //empty string
    var value2;
    var valueFlag = 1;
    var currentBtnNum;
    var decimalCount = 0;

//////////////////////////////////////////////////////

    function currentValue(currentBtnNum){
        //If this is the first value of the eqn
        if(valueFlag === 1){
            value1 += currentBtnNum;
            return value1;
        }
        //Else this is the 2nd value of the eqn
        else if(valueFlag === 2){
            value2 += currentBtnNum;
            return value2;
        }
    }

//////////////////////////////////////////////////////
    //Number functions
    //Double Zero
    var Btn00 = document.getElementById("num00");
    Btn00.addEventListener("click", print00);

    function print00(){
        console.log("00");
        //If user selects zeros for the first value, only print the zeros, do not add to the string. User needs to press any other number first to add zeros to the string
        if(value1 === "" || value2 === ""){
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
        if(value1 === "" || value2 === ""){
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










//     console.log("Hello World!")

// function testFunction(){
//     console.log("Yay my button works!");
// }
//     var demoButton = document.getElementById("testButton");
//     demoButton.addEventListener("click", testFunction);






}());