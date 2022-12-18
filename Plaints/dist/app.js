"use strict";
const e1 = {
    name: "max",
    privelages: ["Create-server"],
    startDate: new Date(),
};
function printEmployee(emp) {
    if ('privelages' in emp) {
        console.log("Privileges" + emp.privelages);
    }
    if ('startDate' in emp) {
        console.log("Privileges" + emp.startDate);
    }
}
class Car {
    drive() {
        console.log('Driving a car ...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount) {
        console.log('Loading cargo' + amount);
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
