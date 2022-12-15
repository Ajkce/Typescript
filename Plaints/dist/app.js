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
class ItDepartMent extends Department {
    constructor(name, admins) {
        super(name);
        this.admins = admins;
    }
}
let Itaccount = new ItDepartMent("IT Department", ["Ajaya"]);
Itaccount.addEmployee("Max");
Itaccount.addEmployee("John");
console.log(Itaccount);
class accountingDepartMent extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
        return;
    }
    constructor(name, reports) {
        super(name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
let accounting = new accountingDepartMent("Accounting", []);
accounting.addEmployee("John");
accounting.printEmoloyee();
console.log(accounting);
accounting.mostRecentReport = 'Earning';
console.log(accounting.mostRecentReport);
