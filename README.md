# React-Tic-Tac-Toe

- A bilingual (English and Traditional Chinese) tic-tac-toe game built on top of [React Tutorial from the official React Docs](https://reactjs.org/tutorial/tutorial.html).

---

### What is tic-tac-toe?

- Tic-tac-toe (American English), noughts and crosses (British English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid - [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe).

- In Taiwan (we speak Mandarin and write in Traditional Chinese characters), we call this game '圈圈叉叉' while '圈 (chiuān)' means 'circles' and '叉 (chā)' means 'crosses'.

---

#### Demo

![demo](./public/demo.gif)

---

#### Features

- Bilingual instructions in English and Traditional Chinese.
- Plays games with 2 players.
- Player One can choose to start from X or O.
- Shows 'Current Player' status.
- Shows 'Game Result' message (which player won & if it was a draw).
- Players can review 'Game History'.
- Players can play this game multiple times.

---

#### Summary of Data Flow and Structure

- One-way data flow (top to down): Game -> Board -> Square

| :whale: Square :whale: | :bulb: Board :bulb: |       :cactus: Game :cactus:       |
| :--------------------: | :-----------------: | :--------------------------------: |
|      **(props)**       |     **(props)**     |                                    |
|  value ( "X" or "O")   |    <- square[i]     |         <- current.squares         |
|        onClick         |    <- onClick[i]    |       <- this.handleClick(i)       |
|      ------------      |    ------------     |            ------------            |
|                        |                     |            **(state)**             |
|                        |                     |              history               |
|                        |                     |             xIsCurrent             |
|                        |                     |             stepNumber             |
|      ------------      |    ------------     |            ------------            |
|                        |                     | **(other functions in component)** |
|                        |                     |      calculateWinner(squares)      |
|                        |                     |        handleButtonClickX()        |
|                        |                     |        handleButtonClickO()        |

**1. Square**

- 9 objects: If a square is clicked, the 'onClick' function will update the value of 'value' to 'X' or "O".

**2. Board (render 9 squares)**

- square[i]: an array with index 0-8, with value of null, "X", "O"

**3. Game (render Board with placeholder values and other game info)**

---

#### Future Features

- Further styling of the game and better responsive web design.
- More game modes: 1 player (plays games with computer), 2 players, 2 players with game history (current version).
- Display the location for each move in the format (col, row) in the move history list.
- Bold the currently selected item in the move list.
- Rewrite Board to use two loops to make the squares instead of hardcoding them.
- When someone wins, highlight the three squares that caused the win.
- Deploy the game.

---

©2020 Ellie Chen - All Rights Reserved.
