let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

// variable to track the turn of the player
let turnO = true; // player O 's turn

// creating of the array which contains the winnig conditions for any players
const winnigConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [3, 5, 6],
];

// fucntion when the box is clicked
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        //console.log(`box clicked`);
        if (turnO) {
            // player O
            box.innerText = "O";
            turnO = false;
        } else {
            // player X
            box.innerText = "X";
            turnO = true;
        }

        // to prevent from clicking the box again
        box.disabled = true;
        checkWinner(); // check if there is a winner
    });
});

const disableBox = () => { 
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => { 
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => { 
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBox();
}

const resetGame = () => { 
    turnO = true;
    enableBox();
    msgContainer.classList.add('hide');
}

const checkWinner = () => {
    for (let pattern of winnigConditions) { 
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                // alert(`Player ${pos1val} wins!`);
                // resetBoxes();
                return;
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);