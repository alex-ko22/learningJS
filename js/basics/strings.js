"use strict";

//One

let a = 5.52095158;

console.log( Math.floor( a * 100 ) /100 );
console.log( Math.ceil( a * 100 ) /100 );
console.log( Math.round( a * 100 ) /100 );

//Two

let b = 'я учу javascript!';

console.log( b.length );

//Three

let c = +prompt("Enter positive two digit number");

if ( c > 9 && c < 100 ) {
    c = String( c );
    console.log(c.substr( 1,1 ) + " " + c.substr( 0,1 ));   
} else console.log( "Wrong number" );

//Four

let d = 'aaa bbb ccc';

console.log( d.slice( 4,7 ));
console.log( d.substring( 7,4 ));
console.log( d.substr( 4,3 ));