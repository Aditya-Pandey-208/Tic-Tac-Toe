let boxes=document.querySelectorAll(".box");
//boxes is now an array
let reset=document.querySelector(".reset");
let winner=document.querySelector(".winner");
let turnX=true; //X will be putted firstly
//if true means X turn if false means O turn

const winPattern=[[0,1,2],[0,3,6],[0,4,8]
                  ,[3,4,5],[6,7,8],[1,4,7],
                  [2,5,8],[2,4,6]]; //2D array
//To store winning patterns
//We have given box numbers
let draw=0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX===true)
        {
            box.innerText = "X";
            box.style.color="purple";
            turnX=false;
        }
        else
        {
            box.innerText = "O";
            box.style.color="red";
            turnX=true;
        }
        draw++;
        box.disabled=true;//so that it cannot be clicked again
        if(checkWinner())
        {
            reset.innerText="New Game";
            for(let box of boxes)
                {
                    box.disabled=true;
                }
        }
        if(draw==9)
        {
            let text="It's a Tie , Try Again";
            winner.innerText=text;
            winner.style.visibility = "visible";
        }
    });
});

function checkWinner()
{
      for(let pattern of winPattern)
      {
        //pattern is arrays inside the array
        //boxes[pattern[0]] means boxes[0] for first iteration
        //as pattern[0] is 0 , lly for all
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1===pos2 && pos2===pos3 && pos1 != "")     
        {
            let text=`Winner is ${pos1}`;
            boxes[pattern[0]].style.backgroundColor = "pink";
            boxes[pattern[1]].style.backgroundColor = "pink";
            boxes[pattern[2]].style.backgroundColor = "pink";
            winner.innerText=text;
            winner.style.visibility = "visible";
            return true;
        }
      }
      return false;
}
reset.addEventListener("click",() => {
    reset.innerText="Reset game";
    winner.style.visibility="hidden";
    boxes.forEach((box) => {
        box.innerText="";
        box.style.backgroundColor="white";
        box.disabled=false;
    });
    turnX=true;
    draw=0;
});