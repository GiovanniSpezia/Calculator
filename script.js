let display = document.getElementById('display');
let currentInput = '0';
let operation = '';
let firstValue = '';

function appendNumber(number) {
    if (currentInput === '0' || currentInput === firstValue) {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

function setOperation(op) {
    if (operation && currentInput !== firstValue) {
        calculate();
    }
    firstValue = currentInput;
    operation = op;
    currentInput = '';
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.textContent = currentInput;
    operation = '';
    firstValue = '';
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = result.toString();
    operation = '';
    firstValue = '';
}

function calculateSqrt() {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    display.textContent = currentInput;
    operation = '';
    firstValue = '';
}