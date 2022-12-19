type Admin = {
  name: string;
  privelages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  privelages: ["Create-server"],
  startDate: new Date(),
};

type unknownEmployee = Employee | Admin;

function printEmployee(emp: unknownEmployee) {
  if('privelages' in emp){

    console.log("Privileges" + emp.privelages);
  }
  if('startDate' in emp){

    console.log("Privileges" + emp.startDate);
  }
  
}
class Car {
drive(){
  console.log('Driving a car ...')
}

}
class Truck {
drive(){
  console.log('Driving a truck ...')
}
loadCargo(amount: number){
  console.log('Loading cargo' + amount)
}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck){

    vehicle.loadCargo(1000)
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'Bird'
  flyingSpeed: number
}
interface Horse {
  type: 'Horse'
  runningSpeed: number
}
type Animal = Bird | Horse

function moveAnimal(animal : Animal){
  let speed;
  switch(animal.type){
    case 'Bird':
      speed = animal.flyingSpeed;
      break;
    case 'Horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}
moveAnimal({type: 'Bird', flyingSpeed: 10});