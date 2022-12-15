"use strict";
let person;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
person = {
    name: 'Ajaya',
    age: 23,
    hobbies: ['eat', 'sleep'],
    role: Role.AUTHOR,
};
person.hobbies.forEach(element => {
    console.log(element);
});
console.log(person);
