"use strict";

$( "#link" ).on( "click", function() {
   $( "#modal").fadeIn(2000);
  });

$( "#btn" ).on( "click", function () {
   $("#modal").fadeOut(2000);
})

