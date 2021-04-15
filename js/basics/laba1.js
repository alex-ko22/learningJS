let price = 57;

let count = 4;

let days = "31";

let sum = price * count;

 

if(typeof sum == "number"){

  sum *= Number(days);

}

 

alert("стоимость за " + days + " день = " + sum);