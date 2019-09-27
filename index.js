var readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.question('Type Your Age? ', (answer) => {
      if(answer>=18){
          console.log("You are adult")
      }else{
          console.log("You are a Child")
      }
  
    rl.close();
  });


// let age =18


// if(age>=18){
//     console.log("You are adult")
// }else{
//     console.log("You are a Child")
// }


// let condition = false


// if(condition){
//     console.log("Condition is True")
// }else{
//     console.log("Condition is False")
// }


// name = "Maruf"

// console.log(name)