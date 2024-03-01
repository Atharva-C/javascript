const user = {
    username: "Atharva",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
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
console.log(res(3,4));