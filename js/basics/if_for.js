 //One

let digit = +prompt("Введите любое число");

if (digit % 2 === 0)
     alert(digit + 10);
        
  else 
     alert(digit * 10);
     
    
//Two

let min = +prompt("Введите число от 0 до 59" );

if (min >=0 && min <15)
     alert("1");
  else if (min >=15 && min <30)
     alert("2");
  else if (min >=29 && min <45)
     alert("3");
  else if (min >=45 && min <60)
     alert("4");
  else    
     alert("Неверное число");
     
 //Three
 
 for (let i = 1; i <= 50; i++) {
     console.log(i);
 }
 
 // Four
 const deposit = +prompt("Введите сумму");
 const percent = +prompt("Введите процентную ставку")
 
 let sum = deposit;
 
 for ( let i =1; i<6; i++) {
     console.log(`Через ${i} год сумма будет  ${sum += sum*percent*.01}` );
 }
 
         