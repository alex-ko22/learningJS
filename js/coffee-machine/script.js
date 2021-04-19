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
        return;
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
            if (counter >= 100) {
                clearInterval(progressGo);
                message.innerText = ("Ready!");
                return;
            }
        }, 100);       
    }    
}

imgBar.onclick = function () {
    imgBar.classList.add("d-none");
    progressDiv.classList.add("d-none");
    message.innerText = "Выберите кофе";
    preparing = false;
}

let btnChange = document.querySelector(".change-btn");
let nominals = [10,5,2,1];
let coins = [0,0,0,0];
let imgs = ["img/10rub.png","img/5rub.png","img/2rub.png","img/1rub.png"];

btnChange.onclick = function () {
    
    balance = balanceInput.value;
    calcCoins(balance);
    takeChange();
    balanceInput.value = "0";
}

function calcCoins (balance) {
    for ( let i = 0; i < nominals.length; i++ ) {
        if ( balance >= nominals[i] ) {
            coins[i] = Math.floor( balance / nominals[i] );
            balance = balance % nominals[i];
            calcCoins(balance);
        }
    }
}

function takeChange() {
    for ( let i = 0; i < coins.length; i++ ) {
        for ( let j = 0; j < coins[i] ; j++ ) {
            drawCoins(i);
        }
    }
}

const container = document.querySelector(".coffee-change");
const containerCoords = container.getBoundingClientRect();

function drawCoins(i) {
    const img =  document.createElement("img");
    img.setAttribute("src", imgs[i]);
    img.className = "coin-img";
    img.style.top = Math.floor(Math.random() * (containerCoords.height - 50)) + "px";
    img.style.left = Math.floor(Math.random() * (containerCoords.width - 50)) + "px";
    container.append(img);
}