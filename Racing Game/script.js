const roadArea=document.querySelector(".road");
var myCar=document.querySelector(".car")
var result=document.getElementById("result");
const score=document.getElementById("score");
var game=document.querySelector(".container");
var counter=0;
var jumpSound=document.getElementById("audio")

function init(){
 ///Road limnes repeat
 for(x=0;x<5;x++){
 let roadLines=document.createElement("div");
 roadLines.setAttribute("class","line");
 roadLines.y=x*150;
 roadLines.style.top=roadLines.y+"px";
 roadArea.appendChild(roadLines);    
}
}
init();
// =====
var enemy=document.getElementById("enemy");
enemy.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random()*4))*90)
    enemy.style.left=random+"px";
    enemy.style.zIndex="2";
    counter++;

})
// Move car
window.addEventListener("keydown",function(e){
    if(e.keyCode==39){
        var myCarLeft=parseInt(this.window.getComputedStyle(myCar).getPropertyValue("left"));
    if(myCarLeft<230){
        myCar.style.left=(myCarLeft+90)+"px";
        jumpSound.play();
    }
    }
    if(e.keyCode==37){
        var myCarLeft=parseInt(this.window.getComputedStyle(myCar).getPropertyValue("left"));
    if(myCarLeft>0){
        myCar.style.left=(myCarLeft-90)+"px";
        jumpSound.play();
    }
    }
    if(e.keyCode==38){
        var myCarLeft=parseInt(this.window.getComputedStyle(myCar).getPropertyValue("bottom"));
    if(myCarLeft>0 && myCarLeft<500){
        myCar.style.bottom=(myCarLeft+110)+"px";
        jumpSound.play();
    }
    }
    if(e.keyCode==40){
        var myCarLeft=parseInt(this.window.getComputedStyle(myCar).getPropertyValue("bottom"));
    if(myCarLeft>110){
        myCar.style.bottom=(myCarLeft-110)+"px";
        jumpSound.play();
    }
    }
})
// ////game over
setInterval(function gameOver(){
    var enemyTop=parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
    var enemyLeft=parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    var myCarLeft=parseInt(window.getComputedStyle(myCar).getPropertyValue("left"));
    if((enemyLeft==myCarLeft) && (enemyTop>454)&&(enemyTop<686)){
        result.style.display="block";
        game.style.display="none";
        score.innerHTML=`score:${counter}`;
        counter=0;
        
    }
  
   
    
    

    
    
},10)


 