import React from "react";
import Board from "./Board";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsCurrent: null,
      stepNumber: 0,
    };
  }

  handleClick = (i) => {
    const { xIsCurrent } = this.state;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsCurrent ? "X" : "O";

    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsCurrent: !xIsCurrent,
      stepNumber: history.length,
    });
  };

  calculateWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  jumpTo = (step) => {
    this.setState({ stepNumber: step, xIsCurrent: step % 2 === 0 });
  };

  handleButtonClickX = () => {
    return this.setState({
      xIsCurrent: true,
    });
  };

  handleButtonClickO = () => {
    return this.setState({
      xIsCurrent: false,
    });
  };

  render() {
    const { history, xIsCurrent, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move
        ? "Go to move 回到步驟 #" + move
        : "Go to game start 回到最初";
      return (
        <li key={move}>
          <Button
            className="btn-long"
            variant="outline-success"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Player ${winner} won! 玩家 ${winner} 勝利 !`;
    } else if (!current.squares.includes(null)) {
      status = `Called it a draw! 雙方平手 !`;
    } else {
      status = `Current Player 當前玩家: Player 玩家 ${xIsCurrent ? "X" : "O"}`;
    }

    return (
      <Container className="game-container">
        {/* game-info */}
        <Col className="game-section game-info">
          <h1>Let's Play Tic-Tac-Toe</h1>
          <h1>一起來玩圈圈叉叉</h1>
          <h3>Would you like to start with X or O? </h3>
          <h3>請選擇由 X 或 O 開始</h3>
          <ButtonGroup>
            <Button
              className="btn-short"
              variant="outline-info"
              onClick={this.handleButtonClickX}
            >
              X
            </Button>
            <Button
              className="btn-short"
              variant="dark"
              onClick={this.handleButtonClickO}
            >
              O
            </Button>
          </ButtonGroup>
          <h3>{status}</h3>
        </Col>
        {/* game-board */}
        <Col md={{ span: 4, offset: 4 }} className="game-section game-board">
          <div className="board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
        </Col>
        <Button
          className="btn-long play"
          variant="info"
          onClick={() => window.location.reload()}
        >
          Play Again! 再玩一次
        </Button>
        {/* game-history */}
        <Col className="game-section game-history">
          <h3>Review Game History 遊戲覆盤</h3>
          <ListGroup>{moves}</ListGroup>
        </Col>
      </Container>
    );
  }
}

export default Game;
