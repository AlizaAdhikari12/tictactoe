let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let game=document.querySelector(".new");
let messagecon=document.querySelector(".msg-cointainer");
let message=document.querySelector("#msg");
let lost= document.querySelector("#lost");
let turn0 = true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    messagecon.classList.add("hide")
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0){
        box.innerText="0";
        box.style.color="black";
        turn0=false;
       }
       else{
        box.innerText="X";
        box.style.color="brown";
        turn0=true;
       }
box.disabled=true;
checkwinner();
checkDraw();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner= (winner)=>{
    message.innerText =`Congratulation,winner is ${winner}`;
    messagecon.classList.remove("hide");
    disabledBoxes();
    
};
const checkwinner=()=>{
for( let pattern of winPatterns){
   let pos1=boxes[pattern[0]].innerText;
   let pos2=boxes[pattern[1]].innerText;
   let pos3=boxes[pattern[2]].innerText;
   if(pos1!="" && pos2!=="" && pos3!==""){
    if(pos1===pos2&& pos2===pos3){
        console.log("winner",pos1);
        showwinner(pos1);
    }
  
   }

  }
  
};
const checkDraw = () => {
    // Check for a draw when all boxes are filled and no winner
    if ([...boxes].every(box => box.innerText !== "") && !checkwinner()) {
        message.innerText = "It's a draw!";
        messagecon.classList.remove("hide");
        disabledBoxes();
    }
};
game.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
 
