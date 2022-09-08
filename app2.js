const express = require("express");
const server = express();

server.get("/:number", function(req , res){
    let num = req.params["number"];
    let number = Number(num)
    res.send(factorial(number));
});

let memory = 1; 

function factorial(a){ 
    memory = 1; 
    if(a === 0 || a === 1){ 
        document.write("Your searched number is:  "  + a + "!   the factorial of this number is: " + 1);
    }else{
        for(let i = 1; i < a+1; i++){
            memory = memory * i; 
            console.log(memory);
        }
        document.write("Your searched number is:  "  + a + "!   the factorial of this number is: " + memory);
    }
}

server.listen(2000)