const user = {
    username: "Atharva",
    price: "999",

    welcomeMessage: function(){
        // console.log(`${this.username} welcome to website`);
        // console.log(this);
    }
}
//this keyword refers to the current context.

// console.log(user.welcomeMessage());
// user.username = "Sam"
// console.log(user.welcomeMessage());

// function chai() {
//     let username = "Atharva"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Atharva"
//     console.log(this);
// }
// chai()

// const add = (num1, num2) => (num1 + num2) //implicit return

// const add = (num1, num2) =>( {username: "Atharva"})     //object has to be returned in paranthesis always.

// // console.log(add(3,6));

const res = (a,b) => ({name: "athu", age: "21"})
// console.log(res(3,4));


//Immediately invoked function Expressions(IIFE)
//used to get rid of the global scope pollution(variables and all)
// (function chai() {
//     console.log(`db connected`);
// }());

// ( (name) => {console.log(`hello ${name}`);} )('Atharva')

//this keyword working inside an arrow function
const obj1 = {
    name: 'John',
    greet: function() {
        const innerFunction = () => {
            console.log(`Hello, ${this.name}!`);
        };
        innerFunction();
    }
};

obj1.greet(); // Output: Hello, John!


//this keyword working inside a normal function
const obj2 = {
    name: 'John',
    greet: function() {
        const innerFunction = function() {
            console.log(`Hello, ${this.name}!`);
            // console.log(this);
        };
        innerFunction();
    }
};

obj2.greet(); // Output: Hello, undefined!
