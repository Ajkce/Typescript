var person;
person = {
    name: 'Ajaya',
    age: 23,
    hobbies: ['eat', 'sleep'],
    role: [2, 'author  ']
};
person.role.push('Writer');
person.hobbies.forEach(function (element) {
    console.log(element);
});
console.log(person);
