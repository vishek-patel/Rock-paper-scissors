const img_rock=document.getElementById("rock");
const img_paper=document.getElementById("paper");
const img_scissors=document.getElementById("scissors");
const submits=document.getElementById("submit");
const reload=document.getElementById("reload");

function setting_value(){
    const inputValue=document.getElementById("detail");
    localStorage.setItem("Name",inputValue.value);
}


function loading(){
    const icon_detail=document.getElementById("icon");
    icon_detail.innerText=" "+localStorage.getItem("Name");
}


let isRock=false;
let isPaper=false;
let isScissors=false;
img_rock.addEventListener("click",function (){
    isRock=true;
    generate();
})

img_paper.addEventListener("click",function (){
    isPaper=true;
    generate();
})

img_scissors.addEventListener("click",function (){
    isScissors=true;
    generate();
    
})

function generate(){
   let text="";
   const finalText=document.getElementById("final_text");
   const randomImage= document.getElementById("random_image");
   let x= Math.floor(Math.random()*3)+1; //1 == rock  2 == paper  3 ===scissors
   randomImage.src=x+".png";
   if(isRock && (x==1)){
       text="Draw!";
       finalText.innerText=text;    
   }
   else if(isRock && (x==2)){
       text="You Lost ☹ , Better Luck Next Time...";
       finalText.innerText=text;
   }
   else if(isRock && (x==3)){
       text="You Won 😎"; 
       finalText.innerText=text;
   }
   else if (isPaper && (x==1)){
        text="You Won 😎"; 
        finalText.innerText=text;
   }
   else if (isPaper && (x==2)){
     text="Draw!";
     finalText.innerText=text;
   }
   else if (isPaper && (x==3)){
    text="You Lost ☹ , Better Luck Next Time...";
    finalText.innerText=text;
   }
   else if (isScissors && (x==1)){
    text="You Lost ☹ , Better Luck Next Time..."; 
    finalText.innerText=text;
   }
   else if (isScissors && (x==2)){
    text="You Won 😎"; 
    finalText.innerText=text;
   }
   else if (isScissors && (x==3)){
    text="Draw!";
    finalText.innerText=text;
   }
   
}

reload.addEventListener("click",function(){
    location.reload()
})

