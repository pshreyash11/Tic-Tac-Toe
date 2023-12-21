let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector(".main");

let turn0 = true;
let count;
let isWin = 0;



const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked ");
        count++;
        if(turn0){   
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        
        box.disabled = true;
        checkWinner();
        if(isWin == 0 && count == 9){
            drawMessage();
        }
    });
})


const disbleBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    count = 0;
    isWin = 0;
};

const drawMessage = () =>{
    msg.innerText = `Game Is DRAW`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    disbleBoxes();
}

const resetGame = () =>{
    turn0 = true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
    disbleBoxes();
    // main.classList.add("full");                               
    
};

const checkWinner = () => {
    for(let patterns of winpatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                isWin = 1;
                showWinner(pos1Val)
            }
        }

    }   
}

newGameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);