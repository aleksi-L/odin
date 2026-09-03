let ruudut = [...document.querySelectorAll('.ruutu')];
let resetbtn = document.querySelector('#uusipelibtn');
let turn0 = true;
let uusibtn = document.querySelector('#uusipelibtn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg'); 

const voittolinijat = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6],
];
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



ruudut.forEach(ruutu => {
  ruutu.addEventListener('click', function () {
  if (turn0) {
  ruutu.innerText = 'O';
  turn0 = false;
  ruutu.disabled = true;
  console.log(turn0)
tarkistavoittaja();
  }
 else {
  ruutu.innerText = 'X';
  turn0 = true;
  ruutu.disabled = true;
tarkistavoittaja();  
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

const näytävoittaja = (voittaja) => {
  msg.innerText = `${voittaja} voitti`;
  msgcontainer.classList.remove('hide');
  disableruudut();
};


const tarkistavoittaja = () => {
  let haswin = false;
  for (let pattern of voittolinijat) {
    let pos1val = ruudut[pattern[0]].innerText;
    let pos2val = ruudut[pattern[1]].innerText;
    let pos3val = ruudut[pattern[2]].innerText;

if ( pos1val !== "" && pos2val !==""&& pos3val!=="" 
    && pos1val === pos2val && pos2val === pos3val) {
    näytävoittaja(pos1val);
    haswin = true;
    return;
  }
}

  if (!haswin){
    const kaikkiruudut  = [...ruudut].every((ruutu) => ruutu.innerText !=="");
    
    if (kaikkiruudut){
      msgcontainer.classList.remove('hide');
      msg.innerText = 'tasapeli';
      }
    }
};

const uusipeli = () => {
  turnO = true;
  enableruudut();
  const msgcontainer = document.querySelector(".msg-container");
  msgcontainer.classList.add('hide');
}
uusipelibtn.addEventListener('click', uusipeli);
