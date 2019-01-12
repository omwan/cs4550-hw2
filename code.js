var calculate = function(operator, number1, number2) {
    var num1 = parseFloat(number1);
    var num2 = parseFloat(number2);
    switch(operator) {
        case "+/=":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "×":
            return num1 * num2;
        case "÷":
            return num1 / num2;
    }
};

(function() {
    var buttons = document.getElementsByTagName("button");
    var input = document.getElementById("calc-input");

    for (let button of buttons) {
        var command = null;
        var number1 = input.value;
        var number2 = null;
        var decimalSelected = false;
        var operation = null;
        var operationSelected = false;

        button.addEventListener("click", function() {
            command = button.innerHTML;

            switch(command) {
                case "C":
                    input.value = 0;
                    number1 = 0;
                    number2 = null;
                    decimalSelected = false;
                    opeation = null;
                    operationSelected = false;
                    break;
                case "+/=":
                    if (operation != null) {
                        number2 = input.value;
                        var output = calculate(operation, number1, number2);
                        input.value = output;
                        number1 = output;
                        number2 = null;
                        operation = null;
                    } else {
                        number1 = input.value;
                        operation = command;
                    }
                    operationSelected = true;
                    break;
                case "-":
                case "×":
                case "÷":
                    number1 = input.value;
                    operation = command;
                    operationSelected = true;
                    break;
                case ".":
                    if (!decimalSelected) {
                        input.value += command;
                        decimalSelected = true;
                    }
                    break;
                default:
                    if (input.value != "0" && !operationSelected) {
                        input.value += command;
                    } else {
                        input.value = command;
                        operationSelected = false;
                    }
            }
        });
    }
})();