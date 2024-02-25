// console.log("Atharva")
//strings

const name = "Atharva"
const age = 21

//string interpolation
// console.log(`hello my name is ${name} I am ${age} years old`);

const game = new String('mario');
// console.log(game);
// console.log(game[0]);

// console.log(game.toUpperCase());
// console.log(game.charAt(2));
// console.log(game.indexOf('i'));

//===========================================
// console.log(Math.random());//gives value b/w 0 and 1
// console.log((Math.random()*10) + 1);

const min = 100
const max = 1000

// console.log(Math.floor(Math.random()*(max - min + 1) + min));

//-------------------------------------------------------------
const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof (myDate));

const myBday = new Date(1975, 6, 14)
console.log(myBday.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myBday.getTime());