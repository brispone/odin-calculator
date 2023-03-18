const calculator = {
    previousEvaluation: "",
    currentValue: "0",
    previousValue: "",
    currentOperator: ""
};

function checkZero() {
    if(calculator.currentValue === "0") {
        return true;
    } else return false;
}

// If the user tries to divide by zero, this function will trigger and universe as we know it will end
function divideByZero() {
    alert("You can't divide by zero!");
    resetCalculator();
}

// Checks if the current display string is within the maximum length for the screen (14 characters) and returns true if it is, false otherwise
function checkDisplayLength() {
    const displayLength = calculator["previousValue"].length + calculator["currentOperator"].length + calculator["currentValue"].length;
    return (displayLength <= 14 ? true : false);
}

function resetCalculator() {
    calculator.currentValue = "0";
    calculator.previousValue = "";
    calculator.currentOperator = "";
    calculator.previousEvaluation = "";
    updateDisplay();
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

// Set the previousEvaluation string
    calculator.previousEvaluation = calculator.previousValue + calculator.currentOperator + calculator.currentValue + "=";
// Take previousValue and currentValue and call the appropriate operation function (add, subtract, etc) according to the current operator
    const x = parseFloat(calculator.previousValue);
    const y = parseFloat(calculator.currentValue);
    let value;
    switch(calculator.currentOperator) {
        case "+":
            value = add(x, y);
            break;
        case "-":
            value = subtract(x, y);
            break;
        case "×":
            value = multiply(x, y);
            break;
        case "÷":
            if(!y) {
                divideByZero();
            } else value = divide(x, y);
    }
// Set the result of this as currentValue
    calculator.currentValue = value.toString();
// Reset previousValue to ""
    calculator.previousValue = "";
// Reset currentOperator to ""
    calculator.currentOperator = "";
    updateDisplay();
}

// Button Event Listeners

function updateDisplay() {
    if(!checkDisplayLength()) {
        alert("You have reached the display limit!");
        resetCalculator();
    }

    const upperDisplay = document.querySelector("#upper-display");
    const lowerDisplay = document.querySelector("#lower-display");
    upperDisplay.innerText = calculator.previousEvaluation;
    lowerDisplay.innerText = calculator.previousValue + calculator.currentOperator + calculator.currentValue;
}

// NUMBER BUTTONS

document.querySelector("#one-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "1" : calculator.currentValue += "1";
    updateDisplay();
});

document.querySelector("#two-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "2" : calculator.currentValue += "2";
    updateDisplay();
});

document.querySelector("#three-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "3" : calculator.currentValue += "3";
    updateDisplay();
});

document.querySelector("#four-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "4" : calculator.currentValue += "4";
    updateDisplay();
});

document.querySelector("#five-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "5" : calculator.currentValue += "5";
    updateDisplay();
});

document.querySelector("#six-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "6" : calculator.currentValue += "6";
    updateDisplay();
});

document.querySelector("#seven-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "7" : calculator.currentValue += "7";
    updateDisplay();
});

document.querySelector("#eight-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "8" : calculator.currentValue += "8";
    updateDisplay();
});

document.querySelector("#nine-button").addEventListener("click", ()=> {
    (checkZero()) ? calculator.currentValue = "9" : calculator.currentValue += "9";
    updateDisplay();
});

document.querySelector("#zero-button").addEventListener("click", ()=> {
    if(calculator.currentValue === "0") {
        return;
    } else {
        calculator.currentValue += "0";
        updateDisplay();
    }
}); 

// CLEAR BUTTON

document.querySelector("#clear-button").addEventListener("click", ()=> {
    resetCalculator();
});

// OPERATOR BUTTONS

document.querySelector("#add-button").addEventListener("click", ()=> {
    if(!calculator.previousValue) {
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    } else if(calculator.currentValue) {
        operate();
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    }
    calculator.currentOperator = "+";
    updateDisplay();
});

document.querySelector("#subtract-button").addEventListener("click", ()=> {
    if(!calculator.previousValue) {
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    } else if(calculator.currentValue) {
        operate();
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    }
    calculator.currentOperator = "-";
    updateDisplay();
}); 

document.querySelector("#multiply-button").addEventListener("click", ()=> {
    if(!calculator.previousValue) {
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    } else if(calculator.currentValue) {
        operate();
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    }
    calculator.currentOperator = "×";
    updateDisplay();
}); 

document.querySelector("#divide-button").addEventListener("click", ()=> {
    if(!calculator.previousValue) {
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    } else if(calculator.currentValue) {
        operate();
        calculator.previousValue = calculator.currentValue;
        calculator.currentValue = "";
    }
    calculator.currentOperator = "÷";
    updateDisplay();
}); 

document.querySelector("#equals-button").addEventListener("click", ()=> {
    if(calculator.currentOperator && calculator.currentValue) {
        operate();
        updateDisplay();
    }
}); 