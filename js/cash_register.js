   //Cash Register functions
    //Will display the current balance
    var balanceElem = document.getElementById("balance");
    balanceElem.addEventListener("click", getBal);

    function getBal(){
        //Display the current amount in the deposit variable
        document.getElementById("display").innerHTML = deposit;
    }

    /*********************************************************** */
    //Will add the amount currently in the display to the cash register, then clears the display
    var depositElem = document.getElementById("deposit");
    depositElem.addEventListener("click", depositCash);

    var deposit = 0;
    var depositValue = 0;

    function depositCash(){
        if(depositValue !== 0){
            deposit += depositValue;
            console.log("deposit: " + deposit);
        }
        else{
            console.log("currentOperand**: " + Calculator.getCurrentOperand());

            //Convert the currentOperand from string to number
            depositValue = Number(Calculator.getCurrentOperand());
            console.log("operandNum: " + depositValue + ", " + typeof depositValue);
            deposit += depositValue;
            console.log("deposit: " + deposit);
        }

        //Clear the display, reset depositValue
        document.getElementById("display").innerHTML = "0";
        depositValue = 0;
        Calculator.clearCurrentOperand();

    }

    /*********************************************************** */
    //Will remove the amount currently in the display to the cash register, then clears the display
    var withdrawElem = document.getElementById("withdraw");
    withdrawElem.addEventListener("click", withdrawCash);

    function withdrawCash(){
        if(depositValue !== 0){
            deposit -= depositValue;
            console.log("decreased deposit amt: " + deposit);
        }
        else{
            //Convert the currentOperand from string to number
            depositValue = Number(Calculator.getCurrentOperand());
            deposit -= depositValue;
            console.log("decreased deposit amt: " + deposit);
        }

        //Clear the display, reset depositValue
        document.getElementById("display").innerHTML = "0";
        depositValue = 0;
        Calculator.clearCurrentOperand();

    }