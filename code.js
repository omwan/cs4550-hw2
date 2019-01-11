(function() {
    var buttons = document.getElementsByTagName("button");
    var input = document.getElementById("calc-input");

    var prevCommand = null;

    for (let button of buttons) {
        var command = null;
        var number1 = input;
        var number2 = null;
        var decimalSelected = false;
        var operation = null;

        button.addEventListener("click", function() {
            command = button.innerHTML;

            // switch(command) {
            //     case "C":
            //         input.value = 0;
            //         number1 = 0;
            //     case "":

            //     // }
            //     // else if (prevCommand != "+/=" && prevCommand != "-" && 
            //     // prevCommand != "×" && prevCommand != "÷") {
            //     //
            // }
            console.log(command);

        });
        prevCommand = command;
    }
})();