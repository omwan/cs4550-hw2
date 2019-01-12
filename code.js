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
        var operation = null;
        var operationCompleted = false;

        button.addEventListener("click", function() {
            command = button.innerHTML;

            switch(command) {
                case "C":
                    input.value = 0;
                    number1 = 0;
                    number2 = null;
                    operation = null;
                    break;
                case "+/=":
                case "-":
                case "×":
                case "÷":
                    if (operation != null && number1 != null) {
                        number2 = input.value;
                        var output = calculate(operation, number1, number2);
                        input.value = output;
                        number1 = output;
                        number2 = null;
                        operationCompleted = true;
                    } else {
                        number1 = input.value;
                        operation = command;
                    }
                    break;
                case ".":
                    if (!input.value.includes(".")) {
                        input.value += command;
                    }
                    break;
                default:
                    if (input.value != "0" && operation == null) {
                        input.value += command;
                    } else {
                        //start new operation
                        if (operationCompleted) {
                            number1 = null;
                            operationCompleted = false;
                        }
                        input.value = command;
                    }
            }
        });
    }
})();