const calcDisplay = document.querySelector("div.display");

/* Variable Storage Start */
let displayValue = "";
let input1 = 5;
let input2 = 2;
let operator = "+";
let tempInputStorage = "";
let inputTracker = 1;
/* Variable Storage End */

/* Need to set up code so that you can press however many numbers you want (e.g. 1951273) 
and only store that value in input1 or input2 when you press an operator */

/* I can track between input1 and input2 by storing 1 or 2 in an input tracking variable
and make the value increment or decrement to change target between input1 and input2

let inputTracker = 1;

if (inputTracker == 1){
    input1 = value;
    inputTracker += 1;
}; else if (inputTracker == 2){
    input2 = value;
    inputTracker -= 1;
};
*/

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
    displayValue = calculate(input1, operator, input2);
    calcDisplay.innerHTML = displayValue;
});

const reset = document.getElementById("reset").addEventListener("click", function(){
    input1 = 0;
    input2 = 0;
    operator = "+";
});

const del = document.getElementById("del");
/* Keypad Functionality Buttons End */

/* Operator Storing Start */
const plus = document.getElementById("plus").addEventListener("click", () => operator = "+");
const minus = document.getElementById("minus").addEventListener("click", () => operator = "-");
const divide = document.getElementById("divide").addEventListener("click", () => operator = "/");
const times = document.getElementById("times").addEventListener("click", () => operator = "x");
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
    calcDisplay.innerHTML = tempInputStorage;
};
/* Calculator Functions End  */