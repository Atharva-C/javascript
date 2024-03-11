const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network related
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 2000)
})

promiseOne.then(function(){
    console.log("Promise consumed"); 
})

// without using variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async task 2 resolved");
})



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



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", pass:"123"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // console.log(response);
    
//         const data = await response.json() // conversion of response to json is also long process so it also needs to be awaited.
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((returned_data) => {
    console.log(returned_data);
})
.catch((error)=>console.log(error))