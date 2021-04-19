"use strict";

let modalWindow = document.getElementById("modal");


$( "#link" ).on( "click", function() {
   modalWindow.classList.remove("d-none");
   $(".window").fadeIn(1000);
  
  });

