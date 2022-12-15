"use strict";
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmoloyee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let accounting = new Department("Accounting");
accounting.addEmployee("John");
accounting.printEmoloyee();
console.log(accounting);
class ItDepartMent extends Department {
    constructor(name, admins) {
        super(name);
        this.admins = admins;
    }
}
let Itaccount = new ItDepartMent("IT Department", ["Ajaya"]);
Itaccount.addEmployee('Max');
Itaccount.addEmployee('John');
console.log(Itaccount);
