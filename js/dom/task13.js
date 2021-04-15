"use strict";

// One
const mainElement = document.body.children;
console.log(mainElement[0]);
console.log(mainElement[1]);
console.log(mainElement[1].lastElementChild);

//Two

let tableAge = document.getElementById("age-table");
console.log(tableAge);
let tableLabels = tableAge.querySelectorAll("label");
console.log(tableLabels);
let firstTd = tableAge.querySelector("td");
console.log(firstTd);
let formSearch = document.querySelector("form[name='search']");
console.log(formSearch);
let firstInput = formSearch.querySelector("input");
console.log(firstInput);
let lastInput = formSearch.lastElementChild;
console.log(lastInput);

//Three

let tableThree = document.querySelector(".table-three");
console.log(tableThree);

let arrTr = tableThree.querySelectorAll("tr>td");
console.log(arrTr);

for( let i = 0; i < 25; i +=6 ) {
    let td = arrTr[ i ];
    td.style.backgroundColor = "red";
}

