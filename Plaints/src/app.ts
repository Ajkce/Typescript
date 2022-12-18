// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number) : number;
}

let addNumber : addFn;
addNumber = (n1: number, n2: number) => {
  return n1 + n2
}



interface Person {
  name: string;
  age?: number;

  greet(phrase: string): void;
}


let user : Person;
user = {
  name : "ajaya",
  
  

  greet(name){
    console.log("Hello " + name)
  }
}

class People implements Person {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let human = new People("Ajaya");
console.log(human)
