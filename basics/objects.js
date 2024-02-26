// singleton----------------------------------- 
// (called so when it is made from constructors)
// const User = new Object()

// const User = {} // this is a non singleton object

// User.id = 1
// User["Name"] = "Atharva"
// console.log(typeof(User.id));


// object literals----------------------------

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// Object.freeze(JsUser) // further changes done on the values of object will not reflect.

// JsUser.greeting = function(){
//     console.log(`hello user, ${this["full name"]}`);
// }
// console.log(JsUser.greeting());

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));

//-----------------------------------------
// const obj1 = {1:'a', 2:'b'}
// const obj2 = {3:'c', 4:'d'}

// // const obj3 = Object.assign({}, obj1, obj2) //here {} is the target object(empty) and rest are the source object.
// const obj3 = {...obj1, ...obj2} // using spread operator and then combinig objects
// console.log(obj3);




//Object Destructuring------------------------------

const course = {
    coursename: "Js",
    price: "1000",
    courseInstructor: "Atharva"
}
// console.log(course.courseInstructor);

// Another way to access object data (especially used in React)----------
// const {courseInstructor} = course
// console.log(courseInstructor);

// const {coursename} = course
// console.log(coursename);

