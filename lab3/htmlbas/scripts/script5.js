let inputString = '';
let secondValue = '';
let operator = null;

function formLine(op1, oper, op2) {
    if (oper == null) {
        return op1
    }
    return op1 + oper + op2;
}

function input(value) {
    if(['+', '-', '*', '/'].indexOf(value) > -1) {
        operator = value;
    } else if(operator === null){
        inputString += value;
    } else {
        secondValue += value;
    }
    document.getElementById('result').value = formLine(inputString, operator, secondValue);
}

function clearInput() {
    inputString = '';
    secondValue = '';
    operator = null;
    document.getElementById('result').value = '';
}

function calculate() {
    if (inputString.length == 0) {
        alert("Нет первого числа. Нажмите C и введите заново. Для ввода отрицательного числа вычтите его модуль из нуля. -2 = 0 - 2")
        return
    }
    if (operator == null) {
        alert("Не задана операция. Введите +, -, *, /")
        return
    }
    if (secondValue.length == 0) {
        alert("Нет второго числа")
        return
    }
    if(operator === '+'){
        inputString =  parseFloat(inputString) + parseFloat(secondValue);
    } else if(operator === '-'){
        inputString = parseFloat(inputString) - parseFloat(secondValue);
    } else if(operator === '*'){
        inputString = parseFloat(inputString) * parseFloat(secondValue);
    } else if(operator === '/'){
        inputString = parseFloat(inputString) / parseFloat(secondValue);
    }
    secondValue = '';
    operator = null;
    document.getElementById('result').value = inputString;
}
