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

    const reset = () => board.fill(""); 

    return { getBoard, placeMarker, reset };
})()

