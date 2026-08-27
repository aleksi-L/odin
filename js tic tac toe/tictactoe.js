(function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  let player = "X";
  let over = false;

  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const boardEl = document.getElementById("board");
  const msgEl = document.getElementById("msg");

  function draw() {
    boardEl.innerHTML = "";
    board.forEach((v,i) => {
      const c = document.createElement("button");
      c.style.width = "60px";
      c.style.height = "60px";
      c.style.fontSize = "30px";
      c.textContent = v;
      c.onclick = () => move(i);
      boardEl.appendChild(c);
    });
  }

  function move(i) {
    if (board[i] || over) return;
    board[i] = player;

    if (wins.some(w => w.every(x => board[x] === player))) {
      msgEl.textContent = player + " wins!";
      over = true;
    } else if (board.every(x => x)) {
      msgEl.textContent = "Draw!";
      over = true;
    } else {
      player = player === "X" ? "O" : "X";
      msgEl.textContent = player + "'s turn";
    }

    draw();
  }

  msgEl.textContent = player + "'s turn";
  draw();
})();
