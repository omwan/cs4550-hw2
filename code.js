(function() {
    "use strict";

    var buttons = document.getElementsByTagName("button");
    var input = document.getElementById("calc-input");

    var command = null;
    var number1 = input.value;
    var number2 = null;
    var operation = null;
    var operationSelected = true;

    //carry out the appropriate action given the button selection.
    var buttonHandler = function(event) {
        command = event.target.innerText;
        switch(command) {
            case "C":
                resetDefaults();
                break;

            case "+/=":
            case "-":
            case "×":
            case "÷":
                handleOperators();
                break;

            case ".":
                handleDecimal();
                break;

            default:
                handleNumbers();
                break;
        }
    };

    //clear current operations and reset variables to initial values.
    var resetDefaults = function() {
        input.value = 0;
        number1 = 0;
        number2 = null;
        operation = null;
        operationSelected = true;
    };

    //store operation, or run it if one has been selected already.
    var handleOperators = function() {
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
    };

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

    //add decimal if none have already been added, if decimal
    //is first selection then prepend with a 0.
    var handleDecimal = function() {
        if (operationSelected) {
            input.value = "0.";
            operationSelected = false;
        } else {
            if (!input.value.includes(".")) {
                input.value += command;
            }
        }
    };

    //append or overwrite current displayed value
    //depending on if an operation has been selected.
    var handleNumbers = function() {
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
    };

    //bind click event to all buttons.
    var init = function() {
        for (let button of buttons) {
            button.addEventListener("click", buttonHandler);
        }
    }

    //wait until document is fully loaded to execute code.
    document.addEventListener("DOMContentLoaded", init, false);
})();
