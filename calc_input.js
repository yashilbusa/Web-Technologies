function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operator = document.getElementById("operator").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "sqrt") {
        result = Math.sqrt(num1);
    } else if (operator === "^") {
        result = Math.pow(num1, num2);
    } else if (operator === "sin") {
        num1 = (num1 * Math.PI) / 180;
        result = Math.sin(num1);
    } else if (operator === "cos") {
        num1 = (num1 * Math.PI) / 180;
        result = Math.cos(num1);
    } else if (operator === "tan") {
        num1 = (num1 * Math.PI) / 180;
        result = Math.tan(num1);
    } else if (operator === "log") {
        result = Math.log(num1);
    } else {
        alert("Invalid operator!");
        return;
    }
    document.getElementById("result").value = result;
}
