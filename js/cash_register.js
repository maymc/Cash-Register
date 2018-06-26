    /*************************************************************************** */
    /*                          Cash Register functions                          */
    /*************************************************************************** */
    
    /*************************************************************************** */
    //Balance function: Will display the current balance
    /*************************************************************************** */
    var balanceElem = document.getElementById("balance");
    balanceElem.addEventListener("click", getBal);

    function getBal(){
        //Display the current amount in the deposit variable
        document.getElementById("display").innerHTML = deposit;
    }

    /*************************************************************************** */
    //Deposit Function: Will add the amount currently in the display to the cash register, then clears the display
    /*************************************************************************** */
    var depositElem = document.getElementById("deposit");
    depositElem.addEventListener("click", depositCash);

    //Initialize the deposit and deposit value
    var deposit = 0;
    var depositValue = 0;

    function depositCash(){
        //Check if the deposit value is zero. If not, then the user evaluated an expression and the result is stored as a value that can be deposited
        if(depositValue !== 0){
            deposit += depositValue;
            console.log("deposit: " + deposit);
        } else{
            //DEBUG - check what the current operand is
            console.log("currentOperand**: " + Calculator.getCurrentOperand());

            //Convert the currentOperand from string to number and add it to the deposit
            depositValue = Number(Calculator.getCurrentOperand());
            console.log("operandNum: " + depositValue + ", " + typeof depositValue);

            deposit += depositValue;
            console.log("deposit: " + deposit);
        }

        //Once the operand is deposited, clear the display and reset the deposit value
        document.getElementById("display").innerHTML = "0";
        depositValue = 0;
        Calculator.clearCurrentOperand();
        Calculator.clearResult();

    }

    /*************************************************************************** */
    //Withdraw function: Will remove the amount currently in the display to the cash register, then clears the display
    /*************************************************************************** */
    var withdrawElem = document.getElementById("withdraw");
    withdrawElem.addEventListener("click", withdrawCash);

    function withdrawCash(){
        //Check if the deposit value is zero. If not, then the user evaluated an expression and the result is stored as a value that can be withdrawn from the deposit
        if(depositValue !== 0){
            deposit -= depositValue;
            console.log("decreased deposit amt: " + deposit);
        } else{
            //Convert the currentOperand from string to number
            depositValue = Number(Calculator.getCurrentOperand());
            deposit -= depositValue;
            console.log("decreased deposit amt: " + deposit);
        }

        //Once the amount is withdrawn, clear the display and reset the deposit value
        document.getElementById("display").innerHTML = "0";
        depositValue = 0;
        Calculator.clearCurrentOperand();
        Calculator.clearResult();

    }