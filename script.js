let displayValue = '';

function appendDigit(digit) {
    displayValue += digit;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
