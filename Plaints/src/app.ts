interface Greet {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class People implements Greet {
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
