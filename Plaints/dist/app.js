"use strict";
let addNumber;
addNumber = (n1, n2) => {
    return n1 + n2;
};
let user;
user = {
    name: "ajaya",
    greet(name) {
        console.log("Hello " + name);
    }
};
class People {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let human = new People("Ajaya");
console.log(human);
