console.log('Hellow world')

let sum = 150 - 70;
console.log(sum);

if (sum > 100) 
{
    console.log('Expensive');
}
else 
{
    console.log('Cheep');
}

function sayHello(name)
{
    console.log('Hello ${name}');
}
sayHello('himu');

let firstName = 'Himu';
let number = 10;
console.log('My name is first '+ firstName + ' and age is' + number);

/*
* This is comment
** this is also comment
*** this is also comment
? this is also comment
! this is also comment
todo this is you have to do this
*/
// single line comment

let frouts = ('apple');
console.log(`${frouts} is my favorite frout, I would like to eat so many ${frouts}`);

var a = 10;
var a = 20;
a = 'Bangladesh';
console.log(a);
{
    var blocked = '30';
    console.log(a);
    console.log(blocked)

}
console.log(blocked)
/**
 * Var Variable
 * You can re-declare
 * you can re-assign
 * Global Scooped
 * var is hosted 
 */
/*
 * let Variable
 ! You can not re-declare
 * you can re-assign
 * blocked Scooped
 ! let is not hosted 
 */

 let b = 10;
 b = 11;
 console.log(b);

 /*
 * const Variable
 ! You can not re-declare
 * you can re-assign
 * blocked Scooped
 ! var is not hosted 
*/

const d = 10;
