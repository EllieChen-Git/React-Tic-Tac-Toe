import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

// Board: renders 9 squares.
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null), xIsNext: true };
  }

  handleClick = i => {
    const squares = this.state.squares.slice(); // array.slice: return a shallow copy of array, without modifying the original array

    if (this.calculateWinner(squares) || squares[i]) {
      // handleClick to return early by ignoring a click if someone has won the game or if a Square is already filled:
      return;
    }
    const { xIsNext } = this.state;
    squares[i] = xIsNext ? "X" : "O";
    this.setState({ squares, xIsNext: !xIsNext });

    console.log(squares);
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const { xIsNext, squares } = this.state;
    const winner = this.calculateWinner(squares);
    let status;
    if (winner) {
      status = `Congrutulations, Player ${winner} won!`;
    } else if (!squares.includes(null)) {
      status = `No one won this game`;
    } else {
      status = `Next player: Player ${xIsNext ? "X" : "O"}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game component: renders a board with placeholder values
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
