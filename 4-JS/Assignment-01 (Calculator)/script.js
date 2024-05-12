let currentNumber = '0';
let previousNumber = null;
let currentOperation = null;

function addDigit(digit) {
    if (currentNumber === '0') {
        currentNumber = digit.toString();
    } else {
        currentNumber += digit.toString();
    }
    updateDisplay();
}

function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
}

function addOperation(operation) {
    if (previousNumber !== null) {
        calculate();
    }
    currentOperation = operation;
    previousNumber = currentNumber;
    currentNumber = '0';
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = null;
    currentOperation = null;
    updateDisplay();
}


function calculate() {
    if (currentOperation !== null) {
        switch (currentOperation) {
            case '+':
                currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
        }
        previousNumber = null;
        currentOperation = null;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
