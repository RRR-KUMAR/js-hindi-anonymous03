// primitive

/* 7 types : String, Number, Boolean, null, undefined, Symbol, */


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id == anotherId);

//const bigNumber = 123361814387678603n




// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "kli"] 
let myObj = {
    name: "Ram",
    age: 22,
}


const myFunction = function(){
    console.log("Hello Word");
}


/*console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof Function);
console.log(typeof heros);
console.log(typeof anotherId;*/
    


// Link to study
// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html
    


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive), Heap (Non-Primitive)

let myYoutubename = "RAHULKUMAR"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    emali: "user@google.com",
    upi: "9179860167@axl"
}

let userTwo = userOne

userTwo.emali = "03anonymous@google.com"
userTwo.emali = "rahulpatel626@google.com"

console.log(userOne.emali);
console.log(userTwo.emali)

