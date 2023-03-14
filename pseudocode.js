/*

let currentValue = "0"
let previousValue = "" (falsy)
let currentOperator = ""
let currentDisplayString (previousValue (if there is one) + currentOperator (if there is one) + currentValue)
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



operate ---->

set the previousEvaluation string
take previousValue and currentValue and call the appropriate operation function (add, subtract, etc) according to the current operator
set the result of this as currentValue
reset previousValue to ""
reset currentOperator to ""












*/