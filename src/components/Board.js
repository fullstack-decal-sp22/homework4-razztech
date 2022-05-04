import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {
    var nextPlayer = "X";

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    const handleClick = (i) => {
      const boardCopy = [...board];
      // If user click an occupied square or if game is won, return
      if (winner || boardCopy[i]) return;
      // Put an X or an O in the clicked square
      boardCopy[i] = xIsNext ? "X" : "O";
      setBoard(boardCopy);
      setXisNext(!xIsNext);
    };

    function changePlayer() {
      if (nextPlayer === "X") {
        nextPlayer = "0";
      } else {
        nextPlayer = "X";
      }
    }

    function renderSquare(i, value, onClick) {
      return <Square key={i} value={value} onClick={() => onClick(i)}/>;
  }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0, board[0], handleClick)}
            {renderSquare(1, board[1], handleClick)}
            {renderSquare(2, board[2], handleClick)}
          </div>
          <div className="board-row">
            {renderSquare(3, board[3], handleClick)}
            {renderSquare(4, board[4], handleClick)}
            {renderSquare(5, board[5], handleClick)}
          </div>
          <div className="board-row">
            {renderSquare(6, board[6], handleClick)}
            {renderSquare(7, board[7], handleClick)}
            {renderSquare(8, board[8], handleClick)}
          </div>
          <div className="status">{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</div>
        </div>
    )
}

export default Board;