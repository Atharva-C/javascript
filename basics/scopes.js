// 
// console.log("outside block:", a); //global scope
// console.log("outside block:", b); //global scope
// // console.log(c);

function one(){
    const username = "Atharva"

    function two() {
        const website = "youtube"
        console.log(username);    
    } 
    // console.log(website);

    two()
}

one()
