//given an operator and pair of numbers, carries out the operation.
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

//main function to handle inputs and displays.
(function() {
    var buttons = document.getElementsByTagName("button");
    var input = document.getElementById("calc-input");

    for (let button of buttons) {
        var command = null;
        var number1 = input.value;
        var number2 = null;
        var operation = null;
        var operationSelected = true;

        button.addEventListener("click", function() {
            command = button.innerHTML;

            switch(command) {
                case "C":
                    input.value = 0;
                    number1 = 0;
                    number2 = null;
                    operation = null;
                    operationSelected = true;
                    break;
                case "+/=":
                case "-":
                case "×":
                case "÷":
                    if (operation == null) {
                        number1 = input.value;
                    } else if (!operationSelected) {
                        //don't repeatedly calculate on operation button press
                        number2 = input.value;
                        var output = calculate(operation, number1, number2);
                        input.value = output;
                        number1 = output;
                        number2 = null;
                    }
                    operation = command;
                    operationSelected = true;
                    break;
                case ".":
                    if (operationSelected) {
                        input.value = "0.";
                        operationSelected = false;
                    } else {
                        if (!input.value.includes(".")) {
                            input.value += command;
                        }
                    }
                    break;
                default:
                    //append or overwrite current displayed value
                    //depending on if an operation has been selected.
                    if (operationSelected) {
                        input.value = command;
                        operationSelected = false;
                    } else {
                        if (input.value != "0") {
                            input.value += command;
                        } else {
                            input.value = command;
                        }
                    }
            }
        });
    }
})();