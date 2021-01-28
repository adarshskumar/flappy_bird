var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px" ;
    counter++;
    var score = document.querySelector('.scoreName');
    score.innerHTML = `${counter}`;
    var talk = document.querySelector('.wickedTalk');
    if(counter < 5){
        talk.innerHTML = 'You Blind'
    }
    else if(counter < 10){
        talk.innerHTML = 'nice try noob';
    }
    else if(counter < 20){
        talk.innerHTML = 'seems like a pro'
    }
    else if(counter < 25){
        talk.innerHTML = 'you like Bronze';
    }
    else if(counter < 40){
        talk.innerHTML = 'silver Thunder';
    }else if (counter > 40){
        talk.innerHTML = 'destroyer';
    }

});

setInterval(function(){
    
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top =(characterTop+3)+"px";
    }
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop= -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
      
        Music();
        alert("GameOver Ok Bei \nYour Score: "+(counter));
        character.style.top = 100 +"px";
        counter=0;

        window.location.href = 'flappy.html';
       
      
            
        
      

     

    }
},10);
function Music() {
    var audio = document.getElementById("audio");
    audio.play();
  }
function jump(){
    jumping=1;
    let jumpCount=0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop>6&&(jumpCount<15)){
            character.style.top =(characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10)
    
}

document.addEventListener('keydown', function(event)
{
    if(event.keyCode == 32){
            jump();

    }
}


)