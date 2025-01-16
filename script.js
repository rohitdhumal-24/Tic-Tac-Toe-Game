let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true ;// playerX ,playerY.

const WinPatterns = [   // Expected combinations of winners !!
    [ 0 , 1 , 2 ],
    [ 0 , 3 , 6 ],
    [ 0 , 4 , 8 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ],
    [ 2 , 4 , 6 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ]
];

const resetGame = () => {      // reset the Game.
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");   
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){               // Player O turn
            box.innerText = "O";
            turnO=false;
        }
        else{                     //player X turn
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
  });

const disableBoxes = () =>{    // after combition found remaining boxes are freez
    for(let box of boxes){
        box.disabled = true; 
    }
}

const enableBoxes = () =>{     //on Refreshing or reset or New Game option New boxes and hide disable.
    for(let box of boxes){
        box.disabled = false; 
        box.innerText="";
    }
}



  const showWinner = (winner) =>{    // Displayng the Winner.
    msg.innerText = `congratulations Winner is ${winner} !!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }

  const checkWinner = () => {                   //checking the winner 
    for(let patterns of WinPatterns ){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner !!",pos1val );

                showWinner(pos1val);
            }
        }
    }
  }

 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);
