const Gameboard = (() => {
    const board = Array(9).fill("");

    const getBoard = () => board;

    const placeMarker = (index, marker) => {
      if (board[index] === "") {
        board[index] = marker;
        return true;
    }
      return false;
    };

    const reset = () => {
      for (let i = 0; i < board.length; i++) board[i] = "";
    };

    return { getBoard, placeMarker, reset };
})()