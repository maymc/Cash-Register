var Calculator = (function(){
    
    /*************************************************************************** */
    /*                         Private Variables                                 */
    /*************************************************************************** */
    //Variables for the operand and operator
    var currentBtnNum = 0;  //Current number button pressed
    var currentOprBtn;      //Current operator button pressed
    var currentOperand = "";    //Stores the current operand
    var decimalCount = 0;   //flag to allow only one decimal in an operand
    var equation = [];

    //Variables for storing the operands and operators for evaluating
    var numArray = [];
    var operatorArray = [];
    var numArray2 = [];
    var result = undefined;

    //Get the display screen
    var dispElem = document.getElementById("display");

    //Get the eqn screen
    var eqnElem = document.getElementById("eqn");
    
    //Add event listeners to cash register buttons to make them do something on click
    //Clear Button
    var clearElem = document.getElementById("clear");
    clearElem.addEventListener("click", clearAll);
    
    //Equal Button
    var equalBtn = document.getElementById("equal");
    equalBtn.addEventListener("click", evaluate);
    
    //Numbers 00,0-9, and the decimal
    var numberElem = document.getElementsByClassName("number");
    for(var i=0; i<numberElem.length; i++){
        numberElem[i].addEventListener("click", printNum);
    }
    
    //Operators
    var oprElem = document.getElementsByClassName("operator");
    for(var i=0; i<oprElem.length; i++){
        oprElem[i].addEventListener("click", createArrays);
    }

    /*************************************************************************** */
    /*                                 Functions                                 */
    /*************************************************************************** */
    
    /*************************************************************************** */
    //Clear function
    /*************************************************************************** */
    function clearAll(){
        console.log("****** Resetting everything - CLEAR ******")
        //Reset all variables and the display to prepare for next equation
        dispElem.innerHTML = "0";   //Display
        currentOperand = "";        //Current operand
        decimalCount = 0;           //Reset the decimal count to 0 to allow decimals
        numArray = [];              //Empty the operand array for the next eqn
        operatorArray = [];         //Empty the operator array for next eqn
        depositValue = 0;           //Empty the deposit
        result = undefined;
        equation = [];
        eqnElem.innerHTML = "";
    }

    /*************************************************************************** */
    //Evaluate function: Evaluate the expression when the equal button is pressed. Follow EMDAS rules(Exponenets, Multiply, Divide, Add, Subtract from left to right)
    /*************************************************************************** */
    function evaluate(){
        //Check if the result is undefined, if not, the user is continuing the equation
        if(result !== undefined){
            numArray = [];  //reset the operand array to empty
            numArray.push(result);
            equation = [];
            equation.push(result);
            equation.push(currentOprBtn);
        }
        //Push the last operand into the number array and the equation array. Then reset the current operand
        numArray.push(currentOperand);
        equation.push(currentOperand);
        currentOperand = "";

        //DEBUG - verify that all operands and operators were collected
        console.log("finalNumArray: " + numArray);
        console.log("finalOperatorArray: " + operatorArray);

        //Convert numArray elements from string to number
        numArray2 = numArray.map(Number);
        console.log("numArray2: " + numArray2);

        //Iterate through the operator array and look for a "^"
        for(var i=0; i<operatorArray.length; i++){
            //DEBUG - Show what the current operator is at this index
            console.log("operator: " + operatorArray[i]);

            //Check whether the operator is a "^"
            if(operatorArray[i] === "^"){

                //Debug - show what the two operands are
                console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);  

                result = 1;     //Initialize the base of the exp

                //Perform exponent calculation
                for(var expCount = 1; expCount <= numArray2[i+1]; expCount++){
                    result = result * numArray2[i];
                    console.log("result: " + result);
                }

                //Remove the two operands that were used in the equation from the operand array and replace it with the result
                numArray2.splice(i,2,result);
                console.log("new numArray2: " + numArray2);

                //Remove the operator already used from the operator array
                operatorArray.splice(i,1);
                console.log("new operatorArray: " + operatorArray);
                
                //To continue iterating through the rest of the operator array, set 'i' back one element
                i--;
            }
        }

        //Iterate through the operator array and find the first "x" or "÷"
        for(var i=0; i<operatorArray.length; i++){

            //DEBUG - Show what the current operator is at this index
            console.log("operator: " + operatorArray[i]);

            //Check whether the oeprator is an "x" or "÷"
            if(operatorArray[i] === "x" || operatorArray[i] === "÷"){

                //Check if the operator is an "x"
                if(operatorArray[i] === "x"){

                    //DEBUG - Show what the two operands are
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);

                    //Multiply the two operands. Console log the result
                    result = numArray2[i] * numArray2[i+1];
                    console.log("result: " + result);

                    //Remove the two operands that were used in the equation from the operand array and replace it with the result
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);

                    //Remove the operator already used from the operator array
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    
                    //To continue iterating through the rest of the operator array, set 'i' back one element
                    i--;
                }
                //Check if the operator is an "÷"
                else if(operatorArray[i] === "÷"){

                    //DEBUG - Show what the two operands are
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);

                    //Divide the second operand from the first operand. Console log the result
                    result = numArray2[i] / numArray2[i+1];
                    console.log("result: " + result);

                    //Remove the two operands that were used in the equation from the operand array and replace it with the result
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);

                    //Remove the operator already used from the operator array
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);

                    //To continue iterating through the rest of the operator array, set 'i' back one element
                    i--;
                }
            }
        }

        //Next, iterate through the operator array and find the first "+" and "-" 
        for(var i=0; i<operatorArray.length; i++){

            //DEBUG - Show what the current operator is at this index
            console.log("operator: " + operatorArray[i]);

            //Check if the operator is a plus "+" or minus "-"
            if(operatorArray[i] === "+" || operatorArray[i] === "-"){

                //Check if the operator is a plus "+"
                if(operatorArray[i] === "+"){

                    //DEBUG - Show what the two operands are                    
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);

                    //Add the two operands and console log the result
                    result = numArray2[i] + numArray2[i+1];
                    console.log("result: " + result);

                    //Remove the two operands that were used in the equation from the operand array and replace it with the result
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);

                    //Remove the operator already used from the operator array
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);
                    
                    //To continue iterating through the rest of the operator array, set 'i' back one element
                    i--;
                }
                //Check if the operator is a minus "-"
                else if(operatorArray[i] === "-"){

                    //DEBUG - Show what the two operands are
                    console.log("firstNum: " + numArray2[i] + ", " + "secondNum: " + numArray2[i+1]);

                    //Subtract the 2nd operand from the 1st operand and console log the result
                    result = numArray2[i] - numArray2[i+1];
                    console.log("result: " + result);

                    //Remove the two operands that were used in the equation from the operand array and replace it with the result
                    numArray2.splice(i,2,result);
                    console.log("new numArray2: " + numArray2);

                    //Remove the operator already used from the operator array
                    operatorArray.splice(i,1);
                    console.log("new operatorArray: " + operatorArray);

                    //To continue iterating through the rest of the operator array, set 'i' back one element
                    i--;
                }
            }
        }

        //Store the result as a value that the user can deposit after evaluating the equation
        depositValue = result;
        console.log("result depositValue: " + depositValue);

        //Print the result to the display screen
        dispElem.innerHTML = result;
        eqnElem.innerHTML = equation.join(" ");
    }

    /*************************************************************************** */
    //Display Function: Show the numbers on the screen when they are clicked
    /*************************************************************************** */
    function printNum(){

        //Set the current button number as the value of the button pressed
        currentBtnNum = this.value;
        
        //Check if the current operand is an empty string and if the user is clicking zero or double zero. Leading zeros are not allowed unless it is a decimal number
        if(currentOperand === "" && currentBtnNum === "0"){
            console.log("currentBtnNum: " + currentBtnNum);
            dispElem.innerHTML = "0";
        } else if(currentOperand === "" && currentBtnNum === "00"){
            console.log("currentBtnNum: " + currentBtnNum);
            dispElem.innerHTML = "00";
        } else{
            //Check if the user is clicking decimal
            if(currentBtnNum === "."){

                //Check if a decimal was already added to the operand, if not, allow the decimal to be added to the operand
                if(decimalCount === 0){

                    //Set the decimal count to 1. Allow only one decimal per operand
                    decimalCount = 1;

                    //Check if the current operand is an empty string, if so, the number is smaller than 1
                    if(currentOperand === ""){
                        currentBtnNum = "0.";
                    } else{
                        currentBtnNum = ".";
                    }

                    //Add the decimal to the current operand
                    dispElem.innerHTML = createOperand(currentBtnNum);
                }
            }
            //Check if the user clicks a number from 1-9
            else if(currentBtnNum !== "."){

                //DEBUG - Check what number the user clicked
                console.log("currentBtnNum: " + currentBtnNum);

                //Add the number to the current operand
                dispElem.innerHTML = createOperand(currentBtnNum);
            }
        }
    }
    //Make the number into a string until an operator is pressed. Pass in the current number clicked to the string
    function createOperand(currentBtnNum){
        //Operand should start off empty
        currentOperand = currentOperand + currentBtnNum;
        return currentOperand;
    }

    /*************************************************************************** */
    //Operator Function: When an operator is selected, the current operand is completed and should be pushed into the operand array (numArray). The operator should be pushed into the operator array.
    /*************************************************************************** */
    function createArrays(){

        //Set the current operator button as the operator pressed
        currentOprBtn = this.value;
        console.log("currentOprBtn: " + currentOprBtn);

        //Add the operand and operator into the equation array
        equation.push(currentOperand);
        equation.push(currentOprBtn);

        //Add the selected operator into the operator array
        operatorArray.push(currentOprBtn);
        console.log("operatorArray: " + operatorArray);

        //Add the currentOperand and reset the operand for the next one
        console.log(currentOperand);
        numArray.push(currentOperand);
        console.log("numArray: " + numArray);
        currentOperand = "";    //reset the operand to an empty string
        decimalCount = 0;       //reset the decimal count for the next operand

        //Display the operator pressed
        dispElem.innerHTML = currentOprBtn;
    }

    /*************************************************************************** */
    /*                          Cash Register functions                          */
    /*************************************************************************** */
    
    /*************************************************************************** */
    //Balance function: Will display the current balance
    /*************************************************************************** */
    // var balanceElem = document.getElementById("balance");
    // balanceElem.addEventListener("click", getBal);

    // function getBal(){
    //     //Display the current amount in the deposit variable
    //     dispElem.innerHTML = deposit;
    // }

    /*************************************************************************** */
    //Deposit Function: Will add the amount currently in the display to the cash register, then clears the display
    /*************************************************************************** */
    // var depositElem = document.getElementById("deposit");
    // depositElem.addEventListener("click", depositCash);

    // var deposit = 0;
    // var depositValue = 0;

    // function depositCash(){
    //     if(depositValue !== 0){
    //         deposit += depositValue;
    //         console.log("deposit: " + deposit);
    //     }
    //     else{
    //         console.log("currentOperand**: " + currentOperand);

    //         //Convert the currentOperand from string to number
    //         depositValue = Number(currentOperand);
    //         console.log("operandNum: " + depositValue + ", " + typeof depositValue);
    //         deposit += depositValue;
    //         console.log("deposit: " + deposit);
    //     }

    //     //Clear the display, reset depositValue
    //     dispElem.innerHTML = "0";
    //     depositValue = 0;
    //     currentOperand = "";

    // }

    /*************************************************************************** */
    //Withdraw function: Will remove the amount currently in the display to the cash register, then clears the display
    /*************************************************************************** */
    // var withdrawElem = document.getElementById("withdraw");
    // withdrawElem.addEventListener("click", withdrawCash);

    // function withdrawCash(){
    //     if(depositValue !== 0){
    //         deposit -= depositValue;
    //         console.log("decreased deposit amt: " + deposit);
    //     }
    //     else{
    //         //Convert the currentOperand from string to number
    //         depositValue = Number(currentOperand);
    //         deposit -= depositValue;
    //         console.log("decreased deposit amt: " + deposit);
    //     }

    //     //Clear the display, reset depositValue
    //     dispElem.innerHTML = "0";
    //     depositValue = 0;
    //     currentOperand = "";

    // }

    //Function to get the current operand
    function getCurrentOperand(){
        return currentOperand;
    }

    //Function to clear the current operand to an empty string
    function clearCurrentOperand(){
        currentOperand = "";
    }

    function clearResult(){
        result = undefined;
    }

    return {
        getCurrentOperand: getCurrentOperand,
        clearCurrentOperand: clearCurrentOperand,
        clearResult: clearResult,
    }

}());