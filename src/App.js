import { Component } from 'react';
import PrintValues from './printValues';
import { useState } from "react";
import './App.css';


function Head(props) {
  return (
    <header>
      Admin pro v 2.0 {props.name}
    </header>
  );
}
const Header = props => <header> Admin pro v 2.0 {props.name}</header>

class Helloheader extends Component {

  render() {
    return (
      <header>
        Admin pro v 2.0 {this.props.name}
      </header>
    );
  }
}

class Text extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.text}</p>
        <p>{this.props.number * 2}</p>
      </div>
    );
  }
}
class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = { timeNow: this.date(), interval: 0 }
  }
  tick() {
    this.setState(state => ({ timeNow: this.date() }));
  }
  date() {
    return new Date().toUTCString()
  }
  componentDidMount() {
    let interval = setInterval(() => this.tick(), 1000)
    this.setState(state => ({ interval: interval }));
  }
  componentWillUnmount() {
    let { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    let { timeNow } = this.state;
    let { arrayNumbers, objectWithInfo, callbackFn, htmlEl } = this.props;
    let mappedNumbers = arrayNumbers.map(callbackFn);
    return (
      <div>
        <h5>the current time is: {timeNow}</h5>
        { arrayNumbers.join(',  ')}
        <br></br>
        { mappedNumbers.join(', ')}
        <br></br>
        {
          objectWithInfo.key1
        }
        {htmlEl}
      </div>
    );
  }

}

function PrintCounter({ counter }) {
  console.log(counter, 'change');
  return (
    <div>
      actual value: { counter}
    </div>
  );
}
function ParamInHandlerFn({ letters }) {
  const [ state, setState ] = useState({ justClicked:'none for now' });
  const { justClicked } = state;
  let lettersArray = [...letters];
  let lettersList = lettersArray.map(letter => {
  return <li key={ letter } onClick = {() => setState( {...state, justClicked: letter} )}> { letter }... </li>
  });
  return (
    <div>
      <h4>How do I pass a parameter to an event handler or callback, how to use set state in function components actually</h4>
      <div>
        just clicked: { justClicked }
      </div>
      <ul>
        { lettersList }
      </ul>
    </div>);
}


// initialize this.state with props
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialCounter
    }
    //this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log(this);
  }
  increment() {
    console.log(this, 'without');
    this.setState((state) => {
      return { ...state, counter: state.counter + 1 }
    })
  }
  decrement() {
    if (this.state.counter > 0) {
      this.setState((state) => {
        return { ...state, counter: state.counter - 1 }
      });
    }
  }
  render() {
    let { counter } = this.state;
    let letters = Array.from({ length: 9 }, (v, i) => String.fromCharCode(65 + i))
    return (
      <div className="counter-wrap">
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <PrintCounter counter={counter}></PrintCounter>
        <ParamInHandlerFn letters={letters} ></ParamInHandlerFn>
      </div>
    );
  }
}
Counter.defaultProps = {
  initialCounter: 25
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <p>first component with state</p>
      </div>
    );
  }
}

export default App;


/*

var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}



person.hello('world direct call')

let storedFn = person.hello

storedFn('world indirect call')
VM3039:4 Brendan Eich says hello world direct call
VM3039:4  [nothing]  says hello world indirect call
*/



/*
function Sidebar() {
  return (
    <aside>
      <section>
        <h3>Menu</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Dashboard</li>
          <li>Contact</li>
        </ul>
      </section>
    </aside>
  );
}
function Main() {
  return (
    <main>
      <article>
        <h3>This is the main</h3>
        <p>
          this is the paragraph, jeje
      </p>
      </article>
    </main>
  );
}

function Bottom() {
  return (
    <footer>
      Antonio Mora 2020 &copy;
    </footer>
  );
}
*/