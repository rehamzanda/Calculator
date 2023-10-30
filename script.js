// default object values
let displayValue = "";
let operator = '';
let firstOperand = '';


//This function updates the value displayed on the calculator's screen
function updateDisplay() {
    document.getElementById('screen').value = displayValue;
}

//This function appends the specified value to the displayValue
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

// It resets the displayValue, operator, and firstOperand variables
function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

//This function handles the addition of arithmetic operators (+, -, *, /)
function appendOperator(op) {
    if (operator === '') {
        firstOperand = displayValue;
        displayValue = '';
        operator = op;
    } else {
        firstOperand = operate(operator, firstOperand, displayValue);
        displayValue = '';
        operator = op;
    }
    updateDisplay();
}

//his function calculates the result of the current operation and display it
function calculateResult() {
    if (operator !== '') {
        displayValue = operate(operator, firstOperand, displayValue);
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

//This function performs arithmetic operations.
function operate(op, firstNum, secNum) {
    firstNum = parseFloat(firstNum);
    secNum = parseFloat(secNum);
    switch (op) {
        case '+':
            return firstNum + secNum;
        case '-':
            return firstNum - secNum;
        case '*':
            return firstNum * secNum;
        case '/':
            if (secNum !== 0) {
                return firstNum / secNum;
            } else {
                alert('Division by zero!');
                clearDisplay();
            }
    }
}

//This is called to initialize the calculator's display 
updateDisplay();
