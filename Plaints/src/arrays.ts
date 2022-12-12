let person : {
    name: string,
    age: number,
    hobbies: string[],
    role : any
     
} 
enum Role  {ADMIN, READ_ONLY, AUTHOR};
person = {
    name: 'Ajaya',
    age : 23,
    hobbies: ['eat', 'sleep'],
    role: Role.AUTHOR,
    
}


person.hobbies.forEach(element => {
    console.log(element);
    
});
console.log(person); 