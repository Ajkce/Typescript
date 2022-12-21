"use strict";
var _a;
const e1 = {
    name: "max",
    privelages: ["Create-server"],
    startDate: new Date(),
};
function printEmployee(emp) {
    if ("privelages" in emp) {
        console.log("Privileges" + emp.privelages);
    }
    if ("startDate" in emp) {
        console.log("Privileges" + emp.startDate);
    }
}
class Car {
    drive() {
        console.log("Driving a car ...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck ...");
    }
    loadCargo(amount) {
        console.log("Loading cargo" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "Bird", flyingSpeed: 10 });
//Type Casting
// const paragraph = <HTMLInputElement>document.getElementById('message-output')!;
const paragraph = document.getElementById("message-output");
paragraph.value = "Hi There";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};
const fetchdUserData = {
    id: "ul",
    name: "max",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
//The optional chaining ? operator will acess the value only if it exists.
console.log((_a = fetchdUserData === null || fetchdUserData === void 0 ? void 0 : fetchdUserData.job) === null || _a === void 0 ? void 0 : _a.description);
//Nulling Collashing ?? will help to replace the || operator where an empty string or zero value will be printed instead of treating it as false
const uservalue = '';
const storedData = uservalue !== null && uservalue !== void 0 ? uservalue : 'Default';
console.log(storedData);
