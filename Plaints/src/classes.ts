class Department {
  name: string;
  //It is a private property which cannot be modified directly and it can be changed only via the functions where it is called
  private employees: string[];

  constructor(n: string) {
    this.name = n;
    this.employees = [];
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmoloyee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartMent extends Department {
  admins: string[];

  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
  }
}

let Itaccount = new ItDepartMent("IT Department", ["Ajaya"]);
Itaccount.addEmployee("Max");
Itaccount.addEmployee("John");
console.log(Itaccount);

class accountingDepartMent extends Department {
  private lastReport: string;

  get mostRecentReport(){
    if(this.lastReport){
        return this.lastReport;
    }
    throw new Error('No report found')
  }
  set mostRecentReport(value: string){
    if(value){
        this.addReport(value)
    }
    return
  }

  constructor(name: string, private reports: string[]) {
    super(name);
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}
let accounting = new accountingDepartMent("Accounting", []);
accounting.addEmployee("John");
accounting.printEmoloyee();
console.log(accounting);
accounting.mostRecentReport = 'Earning'
console.log(accounting.mostRecentReport)
