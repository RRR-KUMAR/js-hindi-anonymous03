// function sayMyName() {
//     console.log("R");
//     console.log("A");
//     console.log("M");


// }

// sayMyName()

// function addTwonumbers(number1, number2){
    
//     console.log(number1 + number2);
// }



function addTwonumbers(number1, number2){

    // let result = number1 + number2
    // return result
    
    return number1 + number2
}  


const result = addTwonumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("PLease Enter a username");
        return

    }
    return '${username} just logged in'

}
//  console.log(loginUserMessage("Ram"))
 console.log(loginUserMessage("Ram"))


 