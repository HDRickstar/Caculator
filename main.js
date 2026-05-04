
const calculator = {
    firstNum : 0,
    operator: "+",
    secondNum : 0,
};

function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first / second;
}

function operate(first, operator, second){
    if(operator === "+"){
        let total = add(first,second);
        return total;
    }
    if(operator === "-"){
        let total = subtract(first,second);
        return total;
    }
    if(operator === "*"){
        let total = multiply(first,second);
        return total;
    }
    if(operator === "/"){
        let total = divide(first,second);
        return total;
    }
}

const display = document.querySelector(".answer");
const buttons = document.querySelectorAll(".button");

let firstNum = "";
let secondNum = "";
let operator = "";
let shouldResetDisplay = false;

buttons.forEach((button) => {
    button.addEventListener("click", (event) =>{
        const value = event.target.textContent;

        if(!isNan(value) || value === "."){
            if(shouldResetDisplay){
                display.textContent ="";
                shouldResetDisplay = false;
            }

            display.textContent += value;

            if(operator === ""){
                firstNum += value;
            } else {
                secondNum += value;
            }
        }

        if(["+","-","*","/"].includes(value)){
            operator = value;
            shouldResetDisplay = true;
        }

        if(value === "="){
            const a = Number(firstNum);
            const b = Number(secondNum);

            let result;

            if (operator === "+") result = a + b;
            if (operator === "-") result = a - b;
            if (operator === "*") result = a * b;
            if (operator === "/") result = a / b;

            display.textContent = result;

            // reset for next calculation
            firstNum = result.toString();
            secondNum = "";
            operator = "";
        }

        // Clear button (optional if you add class="clear-btn")
        if (value.toLowerCase() === "clear") {
            firstNum = "";
            secondNum = "";
            operator = "";
            display.textContent = "";
        }
    });
});