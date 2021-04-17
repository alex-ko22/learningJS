"use strict";

let balance = 0;

const coffeeNameButton = document.querySelectorAll(".coffee-item");
const balanceInput = document.querySelector(".form-control");
const message = document.getElementById("message");
const progressBar = document.querySelector(".progress-bar-animated");
const progressDiv = document.getElementById("progress-div");
const imgBar = document.getElementById("img-bar");
let preparing = false;


for ( let button of coffeeNameButton ){
    button.onclick = prepareCoffee; 
}

function prepareCoffee () {
    
    if (preparing) return;

    let newBalance = 0;
    balance = balanceInput.value;
    balanceInput.style.borderColor = "";  
    
    if (!isNaN(balance))     newBalance = balance - Number(this.getAttribute("cost"));
    else   { 
        message.innerText = "Enter digits!";
        return;
    }
    if (newBalance < 0)     {
        message.innerText = "Not enough money!";
        balanceInput.style.borderColor = "red";
    } else  {
        preparing = true;
        balance = newBalance;
        balanceInput.value = String(balance);
        message.innerText = ("Your " + this.getAttribute("name") + " is preparing...");
        progressDiv.classList.remove("d-none");

        let imgSrc = this.firstElementChild;
        imgBar.src = imgSrc.getAttribute("src");
        imgBar.style.opacity = "0%";
        imgBar.classList.remove("d-none");

        let counter = 0;
        let progressGo = setInterval( function () {
            counter++;
            progressBar.style.width = counter + "%";
            imgBar.style.opacity = counter + "%";
            if (counter >= 100) clearInterval(progressGo);   
        }, 100);
    }
}

imgBar.onclick = function () {
    imgBar.classList.add("d-none");
    progressDiv.classList.add("d-none");
    message.innerText = "Выберите кофе";
    preparing = false;
}


