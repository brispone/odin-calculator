const calculator = {
    currentDisplay: "0",
    previousValue: "",
    runningTotal: 0,
    operator: ""
};

function checkZero() {
    if(calculator.currentDisplay === "0") {
        return true;
    } else return false;
}

function checkForOperator() {
    if(calculator.currentDisplay === "+" ||
       calculator.currentDisplay === "-" ||
       calculator.currentDisplay === "x" ||
       calculator.currentDisplay === "÷"    ) {
            return true;
    } else return false;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate() {
    let value = 0;
    let x = parseFloat(calculator.previousValue);
    let y = parseFloat(calculator.currentDisplay);
    switch(calculator.operator) {
        case "+":
            value = add(x, y);
            break;
        case "-":
            value = subtract(x, y);
            break;
        case "*":
            value = multiply(x, y);
            break;
        case "/":
            value = divide(x, y);
    }
    calculator.previousValue = value;
    calculator.runningTotal = value;
    calculator.currentDisplay = calculator.runningTotal;
    updateDisplay();
}

// Button Event Listeners

function updateDisplay() {
    const display = document.querySelector("#calc-display");
    display.innerText = calculator.currentDisplay;
}

// NUMBER BUTTONS

document.querySelector("#one-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "1" : calculator.currentDisplay += "1";
    updateDisplay();
});

document.querySelector("#two-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "2" : calculator.currentDisplay += "2";
    updateDisplay();
});

document.querySelector("#three-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "3" : calculator.currentDisplay += "3";
    updateDisplay();
});

document.querySelector("#four-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "4" : calculator.currentDisplay += "4";
    updateDisplay();
});

document.querySelector("#five-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "5" : calculator.currentDisplay += "5";
    updateDisplay();
});

document.querySelector("#six-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "6" : calculator.currentDisplay += "6";
    updateDisplay();
});

document.querySelector("#seven-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "7" : calculator.currentDisplay += "7";
    updateDisplay();
});

document.querySelector("#eight-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "8" : calculator.currentDisplay += "8";
    updateDisplay();
});

document.querySelector("#nine-button").addEventListener("click", ()=> {
    (checkZero() || checkForOperator()) ? calculator.currentDisplay = "9" : calculator.currentDisplay += "9";
    updateDisplay();
});

document.querySelector("#zero-button").addEventListener("click", ()=> {
    if(calculator.currentDisplay === "0") {
        return;
    } else {
        checkForOperator() ? calculator.currentDisplay = "0" : calculator.currentDisplay += "0";
    updateDisplay();
    }
}); 

// CLEAR BUTTON

document.querySelector("#clear-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "0";
    calculator.runningTotal = 0;
    updateDisplay();
});

// OPERATOR BUTTONS

document.querySelector("#add-button").addEventListener("click", ()=> {
    if(!checkForOperator()) { calculator.previousValue = calculator.currentDisplay; }
    calculator.currentDisplay = "+";
    calculator.operator = "+";
    updateDisplay();
});

document.querySelector("#subtract-button").addEventListener("click", ()=> {
    if(!checkForOperator()) { calculator.previousValue = calculator.currentDisplay; }
    calculator.currentDisplay = "-";
    calculator.operator = "-";
    updateDisplay();
}); 

document.querySelector("#multiply-button").addEventListener("click", ()=> {
    if(!checkForOperator()) { calculator.previousValue = calculator.currentDisplay; }
    calculator.currentDisplay = "x";
    calculator.operator = "*";
    updateDisplay();
}); 

document.querySelector("#divide-button").addEventListener("click", ()=> {
    if(!checkForOperator()) { calculator.previousValue = calculator.currentDisplay; }
    calculator.currentDisplay = "÷";
    calculator.operator = "/";
    updateDisplay();
}); 

document.querySelector("#equals-button").addEventListener("click", ()=> {
    operate();
    updateDisplay();
}); 