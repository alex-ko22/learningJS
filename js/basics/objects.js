"use strict";

//One
let salaries = {
    
    John : 100,
    Ann : 160,
    Pete : 130,
    
    calcOverall () {
        
        let sum = 0;
        
        for (let key in salaries)
        {
            sum += salaries[key];
        }
        return sum;
    },
};

let sum = 0;

if (typeof(salaries) !== "undefined") {
    
    sum = salaries.calcOverall();
}

console.log(sum);

//Two

let calculator = {
    firstNum : 0,
    secondNum : 0,
    
    read() {
        this.firstNum = +prompt("Enter first number");
        this.secondNum = +prompt("Enter second number");
    }, 

    sum() {
        return (this.firstNum + this.secondNum); 
    },
    
    mul() {
        return (this.firstNum * this.secondNum)
    },
    
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
