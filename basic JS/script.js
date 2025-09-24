// This is log function for executing function
console.log('Hello World');
let name = 'Himadri';
console.log(name);
let firstName = 'Himadri';
let lastName = 'Bhowmick';
console.log(firstName, lastName);

let Mname = 'Himadri Bhowmick';
let age = 25;
let isApproved = true;
let FirstName = undefined;
let LastName = null;

let person = {
    name: 'himadri bhowmick',
    age: 25
};
console.log(person);

// Dot notarion
person.name = 'john';
console.log(person.name);

// Bracket Notation
let selection = 'name';
person[selection] = 'Marry';

console.log(person[selection]);

let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
console.log(selectedColours.length);

// function
function greet(name, endName){
    console.log('Hello ' + name + ' ' + endName);
}
greet('John', 'Bonic');
greet('Marry', 'Smit');

function squre(num){
   return squre = num * num;
}

console.log(squre(2));

