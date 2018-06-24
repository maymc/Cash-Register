var Calculator = (function(){
    //Private Variables
    var currentBtnNum = 0;
    var currentOprBtn;
    var currentOperand = "";
    var decimalCount = 0; //allow only one decimal in an operand

    //Arrays for the numbers and operators
    var numArray = [];
    var operatorArray = [];
    var plusIndex;
    var minusIndex;
    var timexIndex;
    var obelusIndex;
    var firstOperand;
    var secondOperand;
    var firstNum;
    var secondNum;
    var result;
    var numArray2 = [];

    /******************************************************* */
    //Get the display element to display numbers on
    var dispElem = document.getElementById("display");

    //Clear function
    var clearElem = document.getElementById("clear");
    clearElem.addEventListener("click", clearAll);

    function clearAll(){
        console.log("Resetting everything!!! CLEARRRRR")
        //Reset all variables to prepare for next equation
        dispElem.innerHTML = "0";
        currentOperand = "";
        decimalCount = 0;
        numArray = [];
        operatorArray = [];
    }

    /*********************************************************** */
    //Evaluate the expression when the equal button is pressed
    var equalBtn = document.getElementById("equal");
    equalBtn.addEventListener("click", evaluate);

    //Follow PEMDAS (Multiply, Divide, Add, Subtract left to right)
    function evaluate(){
        //Push in the last operand and reset the currentOperand
        numArray.push(currentOperand);
        currentOperand = "";

        console.log("finalNumArray: " + numArray);
        console.log("finalOperatorArray: " + operatorArray);

        //Convert numArray elements from string to number
        var numArray2 = numArray.map(Number);
        console.log(numArray2);

        //First find "x" or "/" and evaluate all expressions with these operators
        for(var i=0; i<operatorArray.length; i++){
            console.log("operator: " + operatorArray[i]);
            if(operatorArray[i] === "x" || operatorArray[i] === "÷"){
                if(operatorArray[i] === "x"){
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);
                    result = numArray2[i] * numArray2[i+1];
                    console.log("result: " + result);
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    
                    //Reset i to start from beginning of operatorArray
                    i--;
                }
                else if(operatorArray[i] === "÷"){
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);
                    result = numArray2[i] / numArray2[i+1];
                    console.log("result: " + result);
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    //Reset i to start from beginning of operatorArray
                    i--;
                }
            }
        }
        //Next find all "+" and "-" and evaluate all expression with these operators
        for(var i=0; i<operatorArray.length; i++){

            console.log("operator: " + operatorArray[i]);
            if(operatorArray[i] === "+" || operatorArray[i] === "-"){
                if(operatorArray[i] === "+"){
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);
                    result = numArray2[i] + numArray2[i+1];
                    console.log("result: " + result);
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    
                    //Reset i to start from beginning of operatorArray
                    i--;
                }
                else if(operatorArray[i] === "-"){
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);
                    result = numArray2[i] - numArray2[i+1];
                    console.log("result: " + result);
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    //Reset i to start from beginning of operatorArray
                    i--;
                }
            }
        }
        dispElem.innerHTML = result;
    }

    /*********************************************************/
    //Print the numbers on the display

    //Make each number and the decimal clickable and display the number on the screen when clicked
    var numberElem = document.getElementsByClassName("number");
    for(var i=0; i<numberElem.length; i++){
        numberElem[i].addEventListener("click", printNum);
    }
    function printNum(){
        currentBtnNum = this.value;

        if(currentOperand === "" && currentBtnNum === "0"){
            console.log("currentBtnNum: " + currentBtnNum);
            dispElem.innerHTML = "0";
        }
        else if(currentOperand === "" && currentBtnNum === "00"){
            console.log("currentBtnNum: " + currentBtnNum);
            dispElem.innerHTML = "00";
        }
        else{
            if(currentBtnNum === "."){
                if(decimalCount === 0){
                    decimalCount = 1;
                    if(currentOperand === ""){
                        currentBtnNum = "0.";
                    }
                    else{
                        currentBtnNum = ".";
                    }
                    dispElem.innerHTML = createOperand(currentBtnNum);
                }
            }
            else if(currentBtnNum !== "."){
                console.log("currentBtnNum: " + currentBtnNum);
                dispElem.innerHTML = createOperand(currentBtnNum);
            }
        }
    }
    //Make the number into a string until an operator is pressed, pass in the currentBtnNum to add to the string
    function createOperand(currentBtnNum){
        //Operand should start off empty
        currentOperand = currentOperand + currentBtnNum;
        return currentOperand;
    }

    /*************************************************************** */
    //For the operators
    //Make each operator clickable and display on the screen when clicked. When an operator is selected, the currentOperand is completed and should be pushed into the numArray. The operator should also be pushed into the operatorArray. Then start a new operand.
    var oprElem = document.getElementsByClassName("operator");
    for(var i=0; i<oprElem.length; i++){
        oprElem[i].addEventListener("click", createArrays);
    }
    function createArrays(){
        //Set the currentOprBtn as the selected operator
        currentOprBtn = this.value;
        console.log("currentOprBtn: " + currentOprBtn);

        //Push the selected operator into the operator array
        operatorArray.push(currentOprBtn);
        console.log("operatorArray: " + operatorArray);

        //Push the currentOperand and reset the operand for the next one
        console.log(currentOperand);
        numArray.push(currentOperand);
        console.log("numArray: " + numArray);
        currentOperand = ""; //reset the operand to an empty string

        //Display the operator pressed
        dispElem.innerHTML = currentOprBtn;
    }

}());