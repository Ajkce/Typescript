"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//The type of return value will be determined by typescript in accordance to its input
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(5, 12));
/* ~~~~ Over here since the function doesnt return anything it would generally would have been undefined by javascript,
but in typescript a function that returns nothing will have a type of void which feature javascript doesnt have but only typeascript has.

~~~~~*/
/*

The return type of above function would be like this

function printResult(num : number):void {
   console.log('Result' + num);
}
*/
let salary;
/* Note that typescipt alos has a separate type called as undefined. In the below example the type of salary will remain undefined */
//# sourceMappingURL=function.js.map