// JavaScript Operator precedence
// Rekha bondoni -----, (), {}, []
// / * - +
/*
console.log(5 + 6 - 3 / 2 * 4); // ans is 5

// JavaScript Functions

function myFunction() {
    console.log('Hellow BGDCL');
}
myFunction();
*/

console.log(5 + 6 - 3 / 2 * 4); // ans is 5

// JavaScript Functions

function myFunction(fullName, age) {
    console.log('Hellow BGDCL ' + fullName + ', I am ' + age + ' years old');
}
myFunction('Rahim', 20);
myFunction('fahim', 21);

// Event-Driven Invication function

function isSubscribed() 
{
    console.log('Thanks for Subscribing');
}
document.getElementById('btn').addEventListener
('click', isSubscribed);

// Self invoced function

(function (message)
{
    console.log('I am self-Invoking Function', message);
}
) ('Hellow');

// Function Storing inside the veriable

let maths = function(x, y) {
    return x * y;
};
console.log(maths(3, 4));
console.log(maths(4, 4));


let numbers = [4, 5, 6, 7];
let sqNumbers = numbers.map(function(number)
{
    return number * number;
}
);
console.log(sqNumbers);

let add = function(x, y)
{
    return x + y;
};
console.log(add(5, 6));

let sum = (x, y) => x + y;
console.log(sum(5 , 6));

function greet(firstName) {
    function sayHi() {
        alert('Hi' + firstName);
};
return sayHi();
}
greet('Rahim');