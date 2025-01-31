let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGameBtn=document.querySelector("#newgame");
let msg=document.querySelector("p");
let msgContainer=document.querySelector(".msgcont");

let turn0=true;
let count = 0;

//Array for storing Winning Patterns
let patterns=[
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,6,8],
         [0,4,8],
         [2,4,6]
        ];
const resetGame = () => {
            turn0 = true;
            count = 0;
            enableBoxes();
            msgContainer.classList.add("hide");
          };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.style.color="green";
            box.style.fontSize="35px";
            box.innerText="0";
            turn0=false;
        }
        else{
            box.style.color="red";
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
         if (count === 9 && !isWinner) {
          gameDraw();
         }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const showwinner=(winner)=>{
    if(winner==="X"){
         msg.style.color="red";
        
    }
    else if(winner=='0'){
        msg.style.color="green";
    }
    else{
        msg.style.color="black"; 
    }

    msg.innerText=`Congratulations!!Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
for(let pattern of patterns){//[0,4,8]
let posval1=boxes[pattern[0]].innerText;
let posval2=boxes[pattern[1]].innerText;
let posval3=boxes[pattern[2]].innerText;
if(posval1!="" && posval2!="" && posval3!=""){
    if(posval1===posval2 && posval2===posval3){
        showwinner(posval1);
        return true;
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
