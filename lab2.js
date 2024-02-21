function calculator() {
    
    var operator = prompt("Enter the operator (+, -, *, /, sqrt,^,log):");
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
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
    } else if (operator === "log") {
        result = Math.log(num1);
    } else {
        alert("Invalid operator!");
        return;
    }

    alert("The result is: " + result);
}
