let expression = "";

function appendValue(value) {
  expression += value
  document.getElementById("display").value = expression;
}

function calculate() {
    const [number1, operator, number2] = parseExpression(expression)
    const result = evalOperation(number1, number2, operator);
    document.getElementById("display").value = expression = result;
}

function parseExpression(expression) {
    // I.e. "5*7" -> [5, "*", 7]
    if(expression.includes("+")) {
        return parseForOperator(expression, "+")
    }
    
    if(expression.includes("-")) {
        return parseForOperator(expression, "-")
    }
    
    if(expression.includes("*")) {
        return parseForOperator(expression, "*")
    }
    
    if(expression.includes("/")) {
        return parseForOperator(expression, "/")
    }
}

function parseForOperator(expression, operator) {
    const expressionList = expression.split(operator)
    let number1 = parseInt(expressionList[0])
    const number2 = parseInt(expressionList[1])
    return [number1, operator, number2] 
}

function evalOperation(number1, number2, operation) {
    switch(operation) {
        case "+": return add(number1, number2)
        case "-": return substract(number1, number2)
        case "*": return multiply(number1, number2)
        case "/": return divide(number1, number2)
    }
}

function cleanDisplay() {
    document.getElementById("display").value = expression = "";
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}