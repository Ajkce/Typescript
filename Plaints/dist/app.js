"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "max";
/*
 The type unknown is similiar to any where it can be assigned to anything later but you cant assign a string or number type to unknown
 
 for eg:  userName = userInput;

 you cant do this directly because you will first have to chack if the type of userInput is string then assign the string type to userinput
 */
if (typeof userInput === "string") {
    userName = userInput;
}
const button = document.querySelector('.button');
console.log(button);
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => { clickHandler('You are welcome'); });
function clickHandler(messae) {
    console.log("Clicked !" + messae);
}
//# sourceMappingURL=app.js.map