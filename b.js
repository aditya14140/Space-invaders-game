
import benemycontroller from"./benemycontroller.js";
const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

canvas.width=600;
canvas.height=600;

const background=new Image();
background.src='space.png';

const enemyController= new benemycontroller(canvas);



function game(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height)


}
setInterval(game,1000/60);//calls 60 times every one second