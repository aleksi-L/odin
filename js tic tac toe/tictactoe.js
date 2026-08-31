const Gameboard = (() => {
    const board = Array(9).fill("");

    const getBoard = () => board;
    
    let turnO = true;

    const placeMarker = (index, marker) => {
      if (board[index] === "") {
        board[index] = marker;
        return true;
    }
      return false;
    };

    const reset = () => board.fill(""); 

    return { getBoard, placeMarker, reset };
})()

const voittolinijat = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
]

ruudut.forEach(ruutu => {
  ruutu.addEventListener('click', function () {
  if (turn0) {
  ruutu.innerText = 'O';
  turn0 = false;
  }
 else {
  ruutu.innerText = 'X';
  turn0 = true;
  }
  });
});
const enableruudut = () => {
  for (let ruutu of ruudut) {
      ruutu.disabled = false;
      ruutu.innerText = "";
  }
};

const disableruudut = () => {
  for (let ruutu of ruudut) {
      ruutu.disabled = true;
  }
};