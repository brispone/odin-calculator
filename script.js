const calculator = {
    currentDisplay: "",
    runningTotal: 0,
    operator: ""
};

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

function operate(operator, x, y) {
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

// Button Event Listeners

function updateDisplay() {
    const display = document.querySelector("#calc-display");
    if(calculator.currentDisplay === "") {
        display.innerText = "0";
    } else display.innerText = calculator.currentDisplay;
}
// NUMBER BUTTONS

document.querySelector("#one-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "1";
    updateDisplay();
});

document.querySelector("#two-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "2";
    updateDisplay();
});

document.querySelector("#three-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "3";
    updateDisplay();
});

document.querySelector("#four-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "4";
    updateDisplay();
});

document.querySelector("#five-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "5";
    updateDisplay();
});

document.querySelector("#six-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "6";
    updateDisplay();
});

document.querySelector("#seven-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "7";
    updateDisplay();
});

document.querySelector("#eight-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "8";
    updateDisplay();
});

document.querySelector("#nine-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "9";
    updateDisplay();
});

document.querySelector("#zero-button").addEventListener("click", ()=> {
    calculator.currentDisplay += "0";
    updateDisplay();
}); 

// CLEAR BUTTON

document.querySelector("#clear-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "";
    calculator.runningTotal = 0;
    updateDisplay();
});

// OPERATOR BUTTONS

document.querySelector("#add-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "+";
    calculator.operator = "+";
    updateDisplay();
});

document.querySelector("#subtract-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "-";
    calculator.operator = "-";
    updateDisplay();
}); 

document.querySelector("#multiply-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "-";
    calculator.operator = "-";
    updateDisplay();
}); 

document.querySelector("#divide-button").addEventListener("click", ()=> {
    calculator.currentDisplay = "-";
    calculator.operator = "-";
    updateDisplay();
}); 