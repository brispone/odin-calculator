/*

let currentValue = "0"
let previousValue = "" (falsy)
let currentOperator = ""
let currentDisplayString (previousValue (if there is one) + currentOperator (if there is one) + currentValue) (i think this calculation can be done in the update display func)
let previousEvaluation (set this when you operate - should be previousValue + operator + currentValue = )


functions

when Number is Pressed -->

keep adding to current value (following checks for zero, etc)



when operator is pressed ----->

    if there is no previousValue >
        move currentValue to previousValue
        set current value to ""
        set appropriate operator

    if there is a currentOperator
        operate
        set appropriate operator





when equals is pressed ---->
    if currentOperator is falsy, don't do anything
    otherwise, operate


operate ---->

set the previousEvaluation string
take previousValue and currentValue and call the appropriate operation function (add, subtract, etc) according to the current operator
set the result of this as currentValue
reset previousValue to ""
reset currentOperator to ""












*/