let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");
let tableButtons = document.querySelector('.tableButtons')
let inputWindow = document.querySelector("#window");
let key = false;
let num1, num2;

tableButtons.addEventListener('click', function(event) {
let numberOfButton = "";
let operationOfButton = "";

function counting(num1,operator,num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operator) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2;
            break;
            
        case "%":
            return num1 % num2;
            break;      
    }
}

    switch (event.target.className) {
        case "numbers":
            if (key === false) {
                numberOfButton = event.target.innerText;
                inputWindow.value += numberOfButton;
                num1 = inputWindow.value;
            } else {
                numberOfButton = event.target.innerText;
                inputWindow.value += numberOfButton;
                num2 = inputWindow.value;
            }
            console.log(num1, num2, key);
            break;
            
            case "operations":
            operationOfButton = event.target.innerText;
            console.log(operationOfButton);
            key = true;
            inputWindow.value = "";
            break;
    }


    console.log(event.target);
  

});