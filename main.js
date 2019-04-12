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

function clearAll() {
    inputWindow.value = "";
    num1 = 0;
    num2 = 0;
    numberOfButton = "";
    key = false;

}

function counting(num1,operator,num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log("*********", num1, operator, num2)
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
            return num2*100/num1;
            break;   
    }
}

    switch (event.target.className) {

//  **** Формирование чисел **** //
 
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
            console.log(num1, num2, key);
            break;

  // ***** Форимирование операций *****  //
            
        case "operations":

            console.log(operationOfButton);
            key = true; // Маркер операций
            if (num2) {
                num1 = counting(num1, operationOfButton, num2);
                inputWindow.value = num1;
                num2 = undefined;
                operationOfButton = event.target.innerText;
            }
            else operationOfButton = event.target.innerText;

            console.log(")))))", num2);
            numberOfButton = "";
            break;

        case "equal":
            inputWindow.value = counting(num1, operationOfButton, num2);
            console.log("-----------", operationOfButton)
            break;

        case "clear":
            clearAll();
            break;




    }


    console.log(event.target);
  

});