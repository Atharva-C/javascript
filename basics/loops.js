// for of 
const arr = [1,2,3,4,5]

for (const it of arr) {
    // console.log(it);    
}

const greetings = "Hello Atharva"

for (const letter of greetings) {
    // console.log(`each char is ${letter}`);
}

// Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":", value);
}

// objects are not iterable using for-of loop

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'helo'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":", value);
// }

// for iterating in objects we use for-in loop

// const myObject = {
//     'js':'javascript',
//     'cpp':'c++',
//     'rb':'ruby',
// }


// for (const key in myObject) {
    //     console.log(`${key} is the shortcut for ${myObject[key]}`);
    // }
    

// for iterating in arrays also we can use for in loop

// const program = ['js', 'rb', 'py', 'java']

// for (const key in program) {
//     console.log(program[key]);
// }

const coding = ['js', 'ruby', 'cpp', 'java', 'python']

// for each loop expects a call back function inside it. Call back function doesnt have name
coding.forEach( function (val) {
    // console.log(val);
})

// using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe) //function given as a reference

coding.forEach( (item, index, arr)=> {
    // console.log(item);
    // console.log(index);
    // console.log(arr);
})

const myCoding = [
    {
        'lang' : 'java',
        'coder' : 'Nishu'
    },
    {

        'lang' : 'Python',
        'coder': 'susu'
    },
    {
        'lang' : 'js',
        'coder' : 'Athu'
    }
]

myCoding.forEach( (item)=> {
    console.log(item.coder, 'for',  item.lang);
    // console.log(item.lang);
})