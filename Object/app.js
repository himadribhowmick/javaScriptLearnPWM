// javascript objects

// object literal

const newSymb = Symbol('key1');
const mobileModel = {
    name: 'iPhone 13 pro',
    price: 120000,
    color: 'silver',
    storage: '128gb',
    camera: ['12mp', '12mp', '12mp'],
    isExpensive: true,
    'Selfie Camera': '12mp',
    [newSymb]: 'MyKey1',
    brandModel: function(){
        return ` mobile name is ${this.name} and price is ${this.price}`;
    },
    battray: {
        mah: 5000,
    }
};

mobileModel.price = 115000; // update
console.log(mobileModel);
console.log(mobileModel.name);
// Object.freeze(mobileModel); // freeze the object
// console.log(Object.isFrozen(mobileModel)); // check if the object is frozen or not
console.log(mobileModel.camera[1]);
console.log(mobileModel['Selfie Camera']);
console.log(mobileModel[newSymb]);
console.log(Object.keys(mobileModel)); // get all keys of the object
console.log(Object.values(mobileModel)); // get all values of the object
console.log(mobileModel.hasOwnProperty('price')); // check if the object has a property or not
console.log(mobileModel.hasOwnProperty('weight')); // check if the object has a property or not
console.log(mobileModel.isExpensive ? 'Yes' : 'No'); // ternary operator
console.log(mobileModel.brandModel());

const object1 = {
    a: 1,
    b: 2,
    c: 3
}
const object2 = {
    d: 4,
    e: 5,
    f: 6
}
const object3 = Object.assign({}, object1, object2); // merge two objects
console.log(object3);
const object4 = {...object1, ...object2, object3}; // merge two objects using spread operator
console.log(object4);
console.log(mobileModel.battray.mah); // nested object

function Person(name, age){
(this.name = name), (this.age = age);
}

const Person1 = new Person('Himadri', 24);
const Person2 = new Person('Bhowmick', 26);
console.log(Person1);
console.log(Person2);