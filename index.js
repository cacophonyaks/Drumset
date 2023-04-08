
//detecting button press
var numOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var buttonInnerHTML = this.innerHTML;//this line is written as we are targetting the inner letter of button 
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
    });
}
//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "j":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
             break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "w":
            var snare= new Audio("sounds/crash.mp3");
            snare.play();
            break;
        case "a":
            var crash= new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/snare.mp3");
            kick.play();
            break;
        default:console.log(buttonInnerHTML);

            break;
     }
}
function buttonAnimation(currentKey){
 var activeClick= document.querySelector("."+currentKey);
 activeClick.classList.add("pressed");
 setTimeout(function(){
    activeClick.classList.remove("pressed");
 },100);
}



