const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById('playText');
const restartButton = document.getElementById('restartButton');
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;
console.log(boxes);


   
const drawBoard = () => {
    boxes.forEach((box, index) => {

      box.addEventListener("click", boxClicked);
    });
  };

  function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
      if(playerHasWon()){
playText.innerText = `${currentPlayer} has won`;
return;
      }
      currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
  }
  

const playerHasWon = () => {
    if(spaces[1]===currentPlayer){
        if(spaces[2]===currentPlayer && spaces[3] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;
        }
        if(spaces[4]===currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;
        }
        if(spaces[5]===currentPlayer && spaces[9] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;
        }
    }  if(spaces[9]===currentPlayer){
        if(spaces[3]===currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;
        }
        if(spaces[7]===currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;
        }

    } if (spaces[5] === currentPlayer) {
        if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
          console.log(`${currentPlayer} has won`);
          return true;
        }
        if (spaces[2] === currentPlayer && spaces[8] === currentPlayer) {
          console.log(`${currentPlayer} has won`);
          return true;
        }
        if(spaces[3] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} has won`);
            return true;  
        }
      }
    };


 
const restart = () => {
    spaces.forEach((space, index)=>{
        spaces[index] = null;
    });
    boxes.forEach(box => {
        box.innerHTML = '';
    });
    playText.innerText = `Let's play!`;
    currentPlayer = O_TEXT; 
}
restartButton.addEventListener('click', restart);

restart();
drawBoard();