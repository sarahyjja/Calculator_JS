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

let expression = "";

function appendValue(value) {
  expression += value
  document.getElementById("display").value = expression;
}

function calculate() {
  const result = expression = eval(expression)
  document.getElementById("display").value = result;
}

function cleanDisplay() {
    console.log("sadsa")
    document.getElementById("display").value = expression = "";
}