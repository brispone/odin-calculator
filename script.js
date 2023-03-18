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

// Button functions

function addOne() {
    (checkZero()) ? calculator.currentValue = "1" : calculator.currentValue += "1";
    updateDisplay();
}

function addTwo() {
    (checkZero()) ? calculator.currentValue = "2" : calculator.currentValue += "2";
    updateDisplay();
}

function addThree() {
    (checkZero()) ? calculator.currentValue = "3" : calculator.currentValue += "3";
    updateDisplay();
}

function addFour() {
    (checkZero()) ? calculator.currentValue = "4" : calculator.currentValue += "4";
    updateDisplay();
}

function addFive() {
    (checkZero()) ? calculator.currentValue = "5" : calculator.currentValue += "5";
    updateDisplay();
}

function addSix() {
    (checkZero()) ? calculator.currentValue = "6" : calculator.currentValue += "6";
    updateDisplay();
}

function addSeven() {
    (checkZero()) ? calculator.currentValue = "7" : calculator.currentValue += "7";
    updateDisplay();
}

function addEight() {
    (checkZero()) ? calculator.currentValue = "8" : calculator.currentValue += "8";
    updateDisplay();
}

function addNine() {
    (checkZero()) ? calculator.currentValue = "9" : calculator.currentValue += "9";
    updateDisplay();
}

function addZero () {
    if(calculator.currentValue === "0") {
        return;
    } else {
        calculator.currentValue += "0";
        updateDisplay();
    }
}

function pressAdd() {
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
}

function pressSubtract() {
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
}

function pressMultiply() {
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
}

function pressDivide() {
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
}

function pressEquals() {
    if(calculator.currentOperator && calculator.currentValue) {
        operate();
        updateDisplay();
    }
}

function pressDecimal() {
    //check if there is no current value, if there isn't then set currentValue to "0."
    if(!calculator.currentValue) {
        calculator.currentValue = "0.";
    //otherwise, check to see if there isn't already a decimal in the currentValue
    //  if there is no decimal, add it to the end of currentValue
    //  otherwise, do nothing
    } else if(!calculator["currentValue"].includes(".")) {
        calculator.currentValue += ".";
    }
    updateDisplay();
}

function clearEntry() {
    // if there is a currentValue, remove the last character of the string
    if(calculator.currentValue) {
        calculator.currentValue = calculator.currentValue.slice(0, -1);
        // check to see if this deleted the last character and if so, set the value to 0 so there isn't a blank screen on the display
        if(!calculator.currentValue) {
            calculator.currentValue = "0";
        }
    }

    updateDisplay();
}

// Button Event Listeners

// NUMBER BUTTONS

document.querySelector("#one-button").addEventListener("click", ()=> {
    addOne();
});

document.querySelector("#two-button").addEventListener("click", ()=> {
    addTwo();
});

document.querySelector("#three-button").addEventListener("click", ()=> {
    addThree();
});

document.querySelector("#four-button").addEventListener("click", ()=> {
    addFour();
});

document.querySelector("#five-button").addEventListener("click", ()=> {
    addFive();
});

document.querySelector("#six-button").addEventListener("click", ()=> {
    addSix();
});

document.querySelector("#seven-button").addEventListener("click", ()=> {
    addSeven();
});

document.querySelector("#eight-button").addEventListener("click", ()=> {
    addEight();
});

document.querySelector("#nine-button").addEventListener("click", ()=> {
    addNine();
});

document.querySelector("#zero-button").addEventListener("click", ()=> {
    addZero();
}); 

// CLEAR BUTTON

document.querySelector("#clear-button").addEventListener("click", ()=> {
    resetCalculator();
});

// OPERATOR BUTTONS

document.querySelector("#add-button").addEventListener("click", ()=> {
    pressAdd();
});

document.querySelector("#subtract-button").addEventListener("click", ()=> {
    pressSubtract();
}); 

document.querySelector("#multiply-button").addEventListener("click", ()=> {
    pressMultiply();
}); 

document.querySelector("#divide-button").addEventListener("click", ()=> {
    pressDivide();
}); 

document.querySelector("#equals-button").addEventListener("click", ()=> {
    pressEquals();
}); 

document.querySelector("#decimal-button").addEventListener("click", ()=> {
    pressDecimal();
}); 

document.querySelector("#ce-button").addEventListener("click", ()=> {
    clearEntry();
}); 

// Key press eventListeners

document.addEventListener("keydown", function(event) {
    switch(event.code) {
        case "Numpad1":
            addOne();
            break;
        case "Numpad2":
            addTwo();
            break;
        case "Numpad3":
            addThree();
            break;
        case "Numpad4":
            addFour();
            break;
        case "Numpad5":
            addFive();
            break;
        case "Numpad6":
            addSix();
            break;
        case "Numpad7":
            addSeven();
            break;
        case "Numpad8":
            addEight();
            break;
        case "Numpad9":
            addNine();
            break;
        case "Numpad0":
            addZero();
            break;
        case "NumpadDecimal":
            pressDecimal();
            break;
        case "NumpadAdd":
            pressAdd();
            break;
        case "NumpadSubtract":
            pressSubtract();
            break;
        case "NumpadMultiply":
            pressMultiply();
            break;
        case "NumpadDivide":
            pressDivide();
            break;
        case "NumpadEnter":
            pressEquals();
            break;
        case "Backspace":
            clearEntry();
            break;
    }
});