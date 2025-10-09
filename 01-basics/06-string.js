const name = "Rahul"
const repoCount = 50


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameNanme = new String('rahul-cg-hc')

console.log(gameNanme[0]);
console.log(gameNanme.__proto__);


// console.log(gameNanme.length);
// console.log(gameNanme.toUpperCase());
console.log(gameNanme.charAt(2));
console.log(gameNanme.indexOf('t'));


const newString = gameNanme.substring(0, 4)
console.log(newString);


const anotherString = gameNanme.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  rahul  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://anonymous.com/rahul%20patel"

console.log(url.replace('20', '-'))

console.log(gameNanme.split.apply('-'));
