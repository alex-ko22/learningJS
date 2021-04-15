"use strict";

// One

let leftInput = document.querySelector(".task1-input");
let resultInput = document.querySelector(".input-result");

function passInput() {
    resultInput.innerHTML = leftInput.value;
}

//Two

let square = document.querySelector(".task-2 .box");

function getColor(newColor) {
    
    square.style.borderColor = newColor;
}

//Three

let leftFruit = document.querySelector(".left-fruit");
let rigthFruit = document.querySelector(".right-fruit");

function toggleSrc () {
    
    rigthFruit.src = leftFruit.src;
}

let square1 = document.querySelector(".task-4 .box");
console.log(square1.classList);

function toggleClass () {
    
   square1.classList.toggle("d-none");
}
