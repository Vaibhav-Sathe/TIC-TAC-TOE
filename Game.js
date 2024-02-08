let boxes = document.querySelectorAll(".Box");
let reset_btn = document.querySelector(".reset-btn");
let new_game = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msg_container = document.querySelector(".msg-container");

let turn0 = true;

const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
]

const resetGame = () => {
      turn0 = true;
      enabledBoxes();
      msg_container.classList.add("hide");
}

const disabledBoxes = () => {
      for (let box of boxes) {
            box.disabled = true;
      }
}
const enabledBoxes = () => {
      for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
      }
}

boxes.forEach((box) => {
      box.addEventListener("click", () => {
            if(turn0){
                  box.innerHTML = "O"
                  turn0 = false;
            }
            else {
                  box.innerHTML = "X"
                  turn0 = true;
            }
            box.disabled = true;
            checkWinner();
      });
});
const showWinner = (win) => {
      msg.innerText = `Congratulations, Winner is player ${win}`;
      msg_container.classList.remove("hide");
      disabledBoxes();
}
const checkWinner = () => {
      for (let pattern of winningPatterns) {
            let posVal1 = boxes[pattern[0]].innerText;
            let posVal2 = boxes[pattern[1]].innerText;
            let posVal3 = boxes[pattern[2]].innerText;

            if(posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
                  if(posVal1 === posVal2 && posVal2 === posVal3) {
                        console.log("winner ", posVal1);
                        boxes.disabled = true;
                        showWinner(posVal1);
                        
                  }
            }
      }
}
reset_btn.addEventListener("click", resetGame);
new_game.addEventListener("click", resetGame);