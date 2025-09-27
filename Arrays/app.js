// JavaScript Arrays

// An array is a special variable, which can hold more than one value at a time.

// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

// However, what if you want to store more cars? You would have to create new variables for each new car:

// An array can hold many values under a single name, and you can access the values by referring to an index number.

let cars = ["Saab", "Volvo", "BMW"];

// Access the elements of an array:

let firstCar = cars[0]; // Saab
let secondCar = cars[1]; // Volvo
let thirdCar = cars[2]; // BMW

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);

// You can also change the value of an array element:

cars[0] = "Toyota"; // Change the first element to "Toyota"
console.log(cars[0]); // Toyota

// You can add elements to an array by simply assigning a value to an index:

cars[3] = "Audi"; // Add a new element at index 3
console.log(cars); // ["Toyota", "Volvo", "BMW", "Audi"]

// Or you can use the push() method to add an element to the end of an array:

cars.push("Mercedes");
console.log(cars); // ["Toyota", "Volvo", "BMW", "Audi", "Mercedes"]

// You can also use the length property to find out how many elements are in an array:

let numberOfCars = cars.length;
console.log(numberOfCars); // 5

const languages = ['HIML', 'CSS', 'JS'];
const languages2 = new Array('HIML', 'CSS', 'JS');

console.log(languages);
console.log(languages2);
console.log(languages[0]);
console.log(languages.length);
console.log(languages[languages.length - 1]); // last element
languages[0] = 'hi';
console.log(languages.toString());


console.log(languages);

// Multidimensional Arrays
// A multidimensional array is an array that contains arrays as its elements. This allows you to create complex data structures, such as matrices or tables.

