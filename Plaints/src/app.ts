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

let accounting = new Department("Accounting");
accounting.addEmployee("John");
accounting.printEmoloyee();
console.log(accounting);

class ItDepartMent extends Department {
  admins: string[];

  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
  }
}

let Itaccount = new ItDepartMent("IT Department", ["Ajaya"]);
Itaccount.addEmployee('Max')
Itaccount.addEmployee('John')
console.log(Itaccount);
