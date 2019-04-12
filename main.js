let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");
let tableButtons = document.querySelector('.tableButtons')
let inputWindow = document.querySelector("#window");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let dot = document.querySelector(".dot");

let key = false;
let num1, num2;
let numberOfButton = "";
let operationOfButton = "";


tableButtons.addEventListener('click', function(event) {

    switch (event.target.className) {
//  **** Формирование чисел **** /
        case "numbers":
            if (key === false) {
                    numberOfButton += event.target.innerText;
                    num1 = numberOfButton;
                    inputWindow.value = num1;
                } else {
                    inputWindow.value = "";
                    numberOfButton += event.target.innerText;
                    num2 = numberOfButton;
                    inputWindow.value = num2;
                }
            break;

  // ***** Форимирование операций *****  //          
        case "operations":
            key = true; // Маркер операций
            if (num2) {
                num1 = counting(num1, operationOfButton, num2);
                inputWindow.value = num1;
                num2 = undefined;
                operationOfButton = event.target.innerText;              
            }
            else operationOfButton = event.target.innerText;
            numberOfButton = "";
            break;

        case "equal":
            inputWindow.value = counting(num1, operationOfButton, num2);          
            numberOfButton = "";
            key=false;
            num2 = undefined;
            break;

        case "clear":
            clearAll();
            break;
    }
});g