import React, { Component } from "react";
import "./TicTacToe.css";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    };
  }

  handleClick(index) {
    if (this.state.board[index] === "" && !this.state.winner) {
      const newBoard = [...this.state.board];
      newBoard[index] = this.state.currentPlayer;
      const newPlayer = this.state.currentPlayer === "X" ? "O" : "X";
      this.setState({
        board: newBoard,
        currentPlayer: newPlayer,
        winner: this.checkWinner(newBoard),
      });
    }
  }

  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    });
  }

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="board">
          {this.state.board.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell}`}
              onClick={() => this.handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {this.state.winner ? (
          <div className="winner">
            <p>Winner: {this.state.winner}</p>
            <button onClick={() => this.resetGame()}>Restart</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.resetGame()}>Restart</button>
          </div>
        )}
      </div>
    );
  }
}

export default TicTacToe;
