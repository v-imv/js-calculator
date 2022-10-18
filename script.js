const calcDisplay = document.querySelector("div.display");

/* Variable Storage Start */
let result = 0;
let input1 = 0;
let input2 = 0;
let operator = "+";
let tempInputStorage = "";
let inputTracker = 1;
/* Variable Storage End */

/* Keypad Numbers Start  */
const num7 = document.getElementById("7").addEventListener("click", function(){inputStorer("7");});
const num8 = document.getElementById("8").addEventListener("click", function(){inputStorer("8");});
const num9 = document.getElementById("9").addEventListener("click", function(){inputStorer("9");});
const num4 = document.getElementById("4").addEventListener("click", function(){inputStorer("4");});
const num5 = document.getElementById("5").addEventListener("click", function(){inputStorer("5");});
const num6 = document.getElementById("6").addEventListener("click", function(){inputStorer("6");});
const num1 = document.getElementById("1").addEventListener("click", function(){inputStorer("1");});
const num2 = document.getElementById("2").addEventListener("click", function(){inputStorer("2");});
const num3 = document.getElementById("3").addEventListener("click", function(){inputStorer("3");});
const num0 = document.getElementById("0").addEventListener("click", function(){inputStorer("0");});
const period = document.getElementById("period");
/* Keypad Numbers End */

/* Keypad Functionality Buttons Start */
const equals = document.getElementById("equals").addEventListener("click", function(){
    input2 = Number(tempInputStorage);
    inputTracker = 1;
    tempInputStorage = "";
    result = calculate(input1, operator, input2);
    calcDisplay.innerHTML = result;
});

const reset = document.getElementById("reset").addEventListener("click", function(){
    input1 = 0;
    input2 = 0;
    operator = "+";
    tempInputStorage = "";
    inputTracker = 1;
    calcDisplay.innerHTML = 0;
});

const del = document.getElementById("del");
/* Keypad Functionality Buttons End */

/* Operator Storing Start */
const plus = document.getElementById("plus").addEventListener("click", function(){
    operator = "+";
    operatorLogic();
});
const minus = document.getElementById("minus").addEventListener("click", function(){
    operator = "-";
    operatorLogic();
});
const divide = document.getElementById("divide").addEventListener("click", function(){
    operator = "/";
    operatorLogic();
});
const times = document.getElementById("times").addEventListener("click", function(){
    operator = "x";
    operatorLogic();
});
/* Operator Storing End */

/* Calculator Functions Start */
const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiplication = (a, b) => a * b;

const division = (a, b) => { 
    if(a !== 0 && b !== 0) {return a / b;};
    return "cannot divide by 0";
};

function calculate(a, operator, b){
    if(operator == "+"){
        return addition(a, b);
    }
    else if(operator == "-"){
        return subtraction(a, b);
    }
    else if(operator == "x"){
        return multiplication(a, b);
    }
    else if(operator == "/"){
        return division(a, b);
    };
};

function inputStorer(a){
    tempInputStorage = tempInputStorage.concat(a);
    console.log(tempInputStorage + " " + tempInputStorage.length);
    if(input1 == 0 && input2 == 0){
    calcDisplay.innerHTML = tempInputStorage;
    }
    else if(input1 > 0){
        calcDisplay.innerHTML = `${input1} ${operator} ${tempInputStorage}`
    };
};

function operatorLogic(){
calcDisplay.innerHTML = tempInputStorage + " " + operator;
    if(inputTracker == 1){
        input1 = Number(tempInputStorage);
        inputTracker += 1;
        tempInputStorage = "";
    }
    else if(inputTracker == 2){
        input2 = Number(tempInputStorage);
        inputTracker -= 1;
        tempInputStorage = "";
    };
};
/* Calculator Functions End  */