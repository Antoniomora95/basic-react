import { Component } from 'react';
import Articles from './sections/ChildrenLayout';
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
    return new Date().toLocaleString()
  }
  componentDidMount() {
    let interval = setInterval(() => this.tick(), 1000);
    console.log(interval, 'interval');
    this.setState(state => ({ interval: interval }));
  }
  componentWillUnmount() {
    let { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    let { timeNow } = this.state;
    return (
      <div>
        <h2>the current time is: {timeNow}</h2>
      </div>
    );
  }

}

function ParamInHandlerFn({ letters }) {
  const [state, setState] = useState({ justClicked: 'none for now' });
  const { justClicked } = state;
  let lettersArray = [...letters];
  let lettersList = lettersArray.map(letter => {
    return <li key={letter} onClick={() => setState({ ...state, justClicked: letter })}> {letter}... </li>
  });
  return (
    <div>
      <h4>How do I pass a parameter to an event handler or callback, how to use set state in function components actually</h4>
      <div>
        just clicked: {justClicked}
      </div>
      <ul>
        {lettersList}
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

    return (
      <div className="counter-wrap">
        {this.state.counter}
      </div>
    );
  }
}
Counter.defaultProps = {
  initialCounter: 25
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      lifeCycles: true,
      inputVal: ''
    }
    this.toggleLifleCycles = this.toggleLifleCycles.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleLifleCycles(){
    this.setState(state => {
      let { lifeCycles } = state;
      console.log('toggle called');
      return {...state,lifeCycles: !lifeCycles}
    });
  }
  handleChange({target}){
    const { value } = target;
    console.log(value);
    this.setState(state => {
      return {...state, inputVal: value}
    });
  }
  render() {
    return (
      <div className="App">
        <Articles/>
      </div>
    );
  }
}

export default App;


/*
/*
    <button onClick={() => this.increment()}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <PrintCounter counter={counter}></PrintCounter>
        <ParamInHandlerFn letters={letters} ></ParamInHandlerFn>
        <p>************---------------------------**************</p>
        <ConditionalSection isAuthenticated = { true }/>
          let { counter } = this.state;
    let letters = Array.from({ length: 9 }, (v, i) => String.fromCharCode(65 + i))
         */


