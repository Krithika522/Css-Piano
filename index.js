
var numberOfKeys =document.querySelectorAll(".white").length;
//  For white keys

for(var i=0;i<numberOfKeys;i++){
    document.querySelectorAll(".white")[i].addEventListener("click", function(){
        
        var whiteKeys = this.innerHTML;
        whiteKeySound(whiteKeys);
         
    });
}

document.addEventListener("keydown",function(events){
    
   whiteKeySound(events.key);
   animationToButton(events.key);
   
   
});

function whiteKeySound(key){

    switch (key) {
            case "b":
                var audio1 = new Audio("audios/pianoG.mp3");
                audio1.play();
                break;
         
            case "a":
                var aKey = new Audio("audios/a.mp3");
                aKey.play();
                 break;

                 case "g":
                var gKey = new Audio("audios/g.mp3");
                gKey.play();
                break;

                 case "f":
                var fKey = new Audio("audios/c.mp3");
                fKey.play();
                 break;

                 case "e":
                var eKey = new Audio("audios/e.mp3");
                eKey.play();
                 break;

                 case "d":
                var dKey = new Audio("audios/d.mp3");
                dKey.play();
                 break;
                 
                  case "c":
                var cKey = new Audio("audios/c1.mp3");
                cKey.play();
                 break;

            default:
                // alert("Wrong key");
               break;
                
         }
}



// For black keys
var numberOfBlackKeys = document.querySelectorAll(".black").length;
for(var j=0;j<numberOfBlackKeys;j++){
    document.querySelectorAll(".black")[j].addEventListener("click",function(){
        var blackKeys = this.innerHTML;
        
        makeSound(blackKeys); 
        
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animationToButton(event.key);
    
});

function makeSound(key){
    
           
    switch(key){

        case "h":
            var asKey = new Audio("audios/a.mp3");
            asKey.play();
            break; 

        case "i":
            var gsKey = new Audio("audios/c1.mp3");
            gsKey.play();
            break;
        case "j":
            var fsKey = new Audio("audios/g.mp3");
            fsKey.play();
            break;
        case "k":
            var dsKey = new Audio("audios/e.mp3");
            dsKey.play();
            break;
        case "l":
            var csKey = new Audio("audios/pianoG.mp3");
            csKey.play();
            break;

            default:
                // alert("press black key from[a,g,f,d,c]");
                break;


       }

}

//Function to make buttons to appear clicked

function animationToButton(currentKey){

   var activeButton =  document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed")
   },1000);

}





