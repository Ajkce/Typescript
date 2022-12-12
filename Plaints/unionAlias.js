"use strict";
//This is an union type which is separated with or operator. The values of the input can be either one of them but you will get an error when you try to perform activities related to only on type
// For eg: If you try to change input1.toUpperCase() you will get an error becasue it is not valid on number type. so in order to perform those activities we will first check the type with if statements and then perform the operations related to the type
function combine(input1, input2, resultConversion //This is called literal type because even though its type has not been defined but it can have only two string values which are fixed
) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number")) {
        result = +input1 + +input2;
    }
    else {
        if (typeof input1 === "string" && typeof input2 === "string" && resultConversion === "as-number") {
            result = parseFloat(input1) + parseFloat(input2);
        }
        else {
            result = input1.toString() + input2.toString();
        }
    }
    return result;
}
const combinedAges = combine(20, 36, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("20", "36", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("max", "Anna", "as-text");
console.log(combinedNames);
