"use strict";
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
