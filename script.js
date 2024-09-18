let display = document.getElementById('display');
let keys = document.querySelectorAll('.key');

let calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operation: null,
    isScientific: false,
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        switch (key.id) {
            case 'clear':
                calculator.displayValue = '0';
                calculator.firstOperand = null;
                calculator.secondOperand = null;
                calculator.operation = null;
                break;
            case 'invert':
                calculator.displayValue = parseFloat(calculator.displayValue) * -1;
                break;
            case 'percent':
                calculator.displayValue = parseFloat(calculator.displayValue) / 100;
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                calculator.operation = key.id;
                calculator.firstOperand = parseFloat(calculator.displayValue);
                calculator.displayValue = '0';
                break;
            case 'equals':
                calculator.secondOperand = parseFloat(calculator.displayValue);
                calculator.displayValue = operate(calculator.firstOperand, calculator.secondOperand, calculator.operation);
                calculator.firstOperand = null;
                calculator.secondOperand = null;
                calculator.operation = null;
                break;
            case 'sin':
                calculator.displayValue = Math.sin(parseFloat(calculator.displayValue));
                break;
            case 'cos':
                calculator.displayValue = Math.cos(parseFloat(calculator.displayValue));
                break;
            case 'tan':
                calculator.displayValue = Math.tan(parseFloat(calculator.displayValue));
                break;
            case 'sqrt':
                calculator.displayValue = Math.sqrt(parseFloat(calculator.displayValue));
                break;
            case 'exp':
                calculator.displayValue = Math.exp(parseFloat(calculator.displayValue));
                break;
            case 'log':
                calculator.displayValue = Math.log(parseFloat(calculator.displayValue));
                break;
            case 'scientific':
                calculator.isScientific = !calculator.isScientific;
                if (calculator.isScientific) {
                    document.querySelectorAll('.scientific-key').forEach(key => key.style.display = 'block');
                } else {
                    document.querySelectorAll('.scientific-key').forEach(key => key.style.display = 'none');
                }
                break;
            default:
                if (calculator.displayValue === '0') {
                    calculator.displayValue = key.id;
                } else {
                    calculator.displayValue += key.id;
                }
        }
        display.value = calculator.displayValue;
    });
});

function operate(a, b, operation) {
    switch (operation) {
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'subtract':
            return a - b;
        case 'add':
            return a + b;
    }
}