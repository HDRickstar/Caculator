
const calculator{
    firstNum : 0;
    operator: "+";
    secondNum : 0;
}

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
        total = add(first,second);
        return total;
    }
    if(operator === "-"){
        total = subtract(first,second);
        return total;
    }
    if(operator === "*"){
        total = multiply(first,second);
        return total;
    }
    if(operator === "/"){
        total = divide(first,second);
        return total;
    }
}
