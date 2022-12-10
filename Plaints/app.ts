let userInput : unknown;
let userName : string;
 
userInput = 5;
userInput = 'max';


 /* 
 The type unknown is similiar to any where it can be assigned to anything later but you cant assign a string or number type to unknown
 
 for eg:  userName = userInput;

 you cant do this directly because you will first have to chack if the type of userInput is string then assign the string type to userinput
 */



if(typeof userInput === 'string'){
    userName = userInput
}
 