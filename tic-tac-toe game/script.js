let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let displayMsg = document.querySelector(".msg-box");
let gm = document.querySelector(".game-page");

let turnO = true;
let isWinner = false;
let count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click", function(){
        if(turnO){
            box.innerHTML = "0";
            turnO = false;
            count++;
            box.disabled= true;
        }else{
            box.innerHTML = "X";
            turnO = true;
            count++;
            box.disabled= true;
        }
        let win = checkWinner();
       
    })
})

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(){
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                msg.innerHTML = `Congratulations , Winner is ${pos1}`;
                disableBtns();
                displayMsg.classList.remove("hide");
                gm.classList.add("hide");
                turnO = true;
            }
        }
        if(count >= 9){
            msg.innerHTML = `It's a Draw`;
            disableBtns();
            displayMsg.classList.remove("hide");
            gm.classList.add("hide");
            turnO = true;
        }
    }
}

function disableBtns(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableBtns(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

function reset(){
    enableBtns();
    msg.innerHTML = "Winner";
    displayMsg.classList.add("hide");
    gm.classList.remove("hide");
    turnO = true;
    count = 0;
}

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);