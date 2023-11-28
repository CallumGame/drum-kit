// var drums = document.querySelectorAll(".drum");

// for( var i = 0; i < drums.length; i++){
//     drums[i].addEventListener("click", function (){
//     alert("i got clicked")
// });
// }

var drums = document.querySelectorAll(".drum");

var audio = new Audio('sounds/tom-1.mp3');

for( var i = 0; i < drums.length; i++){
   
    drums[i].addEventListener("click", function (){
    audio.play();
    });

}