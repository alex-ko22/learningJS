"use strict";

//One

let arr1 = [2, 3, 4, 5];
let mul = 1;

for ( let a of arr1 ) {
     mul *= a; 
} 
console.log( mul );

//Two

let arr2 =  ['a', 'b', 'c'];
arr2.push( 1, 2, 3 );
console.log(arr2);

//Three

let arr3 = [1,2,3];
let arr4 = [4,5,6];
let arr5 = arr3.concat( arr4 );
console.log( arr5); 

// Four

let str =  'var_text_hello';
str = str.split("_");

str[1] = ( str[1][0].toUpperCase() + str[1].substr(1) );
str[2] = ( str[2][0].toUpperCase() + str[2].substr(1) );
str = str.join("");

console.log(str);

// Five

let arr6 = [ 2, 4, 4, 12, 25, 3, -3];
let arr7 = [];

for (let a of arr6){
    if (a > 0 && a <10) {
        arr7.push(a);
    }
}

console.log(arr7);

//Six

let moreThanTen = function() {
    let sum = 0;
    
    for( let i = 0; i < arr6.length; i++ ) {
        
        sum = sum + arr6[i];
        if( sum > 10 ) {
            return( "At the element number " + (i + 1) );
        }
    }
    return( "The total sum is less than ten");
};

console.log( moreThanTen() );

//Seven

let areEqualNumbers = function() {

    for( let i = 0; i < arr6.length; i++ ) {
        
        if ( arr6[ i ] === arr6[ i + 1 ] ){
            return("Yes");
        }
    }
    return("No");
};

console.log( areEqualNumbers() );

//Eight

let arr8 = [];
let i = 0;
let j = 1;
let max = 1;

do  {

   let numb = +prompt("Enter number");

   if ( !isNaN(numb) ) {
       
       arr8.push(numb);
       i ++;
     }
   
}  while ( i < 10 );  

for( i = 0; i < 10; i++ ) {
    
    if ( arr8[ i ] == arr8[ i-1 ]) {
        
        j++;
        if ( j  >=  max  ) max = j;
    
    } else  j = 1;
    
}

console.log( arr8 );
console.log( "Maximal is " + max );

