# React-Tic-Tac-Toe

React Tutorial from React Docs: https://reactjs.org/tutorial/tutorial.html

---

### What is tic-tac-toe?  

- Tic-tac-toe (American English), noughts and crosses (British English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid - [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe).

- In Mandarin (as least in Taiwan), we call this game '圈圈叉叉' while '圈 (chiuān)' means 'circles' and '叉 (chā)' means 'crosses'.

---

### Class components, State Management, Passing Props (from parent to child)

1. [child] Value is saved in 'state' of child component

```javascript
// State: In React, components use state to 'remember' things.

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
```

2. [child] create an event handler (e.g. onClick) & use setState to store the change of value in 'state' of child component

```javascript
class Square extends React.Component {
    // ...
render() {
    return (
      <button
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
```

3. [child -> parent] Lift value from 'state' of child component up to 'props/ this.state' in parent component
4. [parent ->  child] pass 'props' from 'parent' component to 'child' component (now the value is saved in props in the 'parent')

```javascript
// Passing props: how information flows in React apps, from parents to children. The parent component can pass the state back down to the children by using props.

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
  // ...
```

```javascript
class Square extends React.Component {
//...
      <button >
        {this.props.value}
      </button>
```

5. [parent] Create an event handler 'onClick={() => this.handleClick(i)}' (also create handleClick(i) function)

```javascript
class Board extends React.Component {
    // ...
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
      // In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
```


6. [parent ->  child]: pass 'props/ onClick()' to 'child' component 'onClick={() => this.props.onClick()' (child components are now controlled components. The parent has full control over them.)

```javascript
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```
---

### Functional components

- Change from class to functional components

```javascript
// Class component
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

// Functional component
const Square = props => { // Pass props as parameter here
// remove 'render()' here
  return (
      // Change from 'this.props' to 'props'
      // onClick: change from '() => this.props.onClick()' to 'props.onClick'
    <button className="square" onClick={props.onClick}> 
      {props.value}
    </button>
  );
};
```





```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
