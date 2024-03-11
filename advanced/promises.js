// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network related
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 2000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed"); 
// })

//without using variable
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("async task 2 resolved");
// })

// 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Atharva", pass:"1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive