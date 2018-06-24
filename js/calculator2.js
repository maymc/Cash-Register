var Calculator = (function(){
    //Private Variables
    var currentBtnNum = 0;
    var currentOprBtn;
    var currentOperand = "";
    var decimalCount = 0; //allow only one decimal in an operand

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
    //Make the number into a string until an operand is pressed, pass in the currentBtnNum to add to the string
    function createOperand(currentBtnNum){
        //Operand should start off empty
        currentOperand = currentOperand + currentBtnNum;
        return currentOperand;
    }

    //Make each operator clickable and display on the screen when clicked
    var oprElem = document.getElementsByClassName("operator");
    for(var i=0; i<oprElem.length; i++){
        oprElem[i].addEventListener("click", printOpr);
    }
    function printOpr(){
        currentOprBtn = this.value;
        console.log("currentOprBtn: " + currentOprBtn);
        dispElem.innerHTML = currentOprBtn;
    }





}());