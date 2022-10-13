let displayValue = 0;
let input1 = 0;
let input2 = 0

const calcDisplay = document.querySelector("div.display");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const del = document.getElementById("del");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const plus = document.getElementById("plus");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const minus = document.getElementById("minus");
const period = document.getElementById("period");
const num0 = document.getElementById("0");
const divide = document.getElementById("divide");
const times = document.getElementById("times");
const reset = document.getElementById("reset");
const equals = document.getElementById("equals");

function addition(a, b){
    return a + b;
};

function subtraction(a, b){
    return a - b;
};

function multiplication(a, b){
    return a * b;
};

function division(a, b){
    if(a !== 0 && b !== 0){
    return a / b;
    };
    return "cannot divide by 0";
};

function calculate(a, operator, b){
    if(operator == "plus"){
        return addition(a, b);
    };
    if(operator == "minus"){
        return subtraction(a, b);
    };
    if(operator == "times"){
        return multiplication(a, b);
    };
    if(operator == "divided_by"){
        return division(a, b);
    };
};