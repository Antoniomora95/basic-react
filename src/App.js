import { Component } from 'react';
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
class Tick extends Component{
  constructor(props){
    super(props);
    this.state = {timeNow : this.date(), interval: 0}
  }
  tick(){
    this.setState(state => ({timeNow: this.date()}));
  }
  date(){
    return new Date().toUTCString()
  }
  componentDidMount(){
    let interval = setInterval(()=> this.tick(), 1000)
    this.setState(state => ({interval: interval}));
  }
  componentWillUnmount(){
    let { interval } = this.state;
    clearInterval(interval);
  }

  render(){
    let { timeNow } = this.state;
    let { arrayNumbers, objectWithInfo, callbackFn, htmlEl } = this.props;
    let mappedNumbers = arrayNumbers.map(callbackFn);
    return(
      <div>
        <h5>the current time is: {timeNow}</h5>
        { arrayNumbers.join(',  ') }
        <br></br>
        { mappedNumbers.join(', ') }
        <br></br>
        {
          objectWithInfo.key1
        }
        {htmlEl}
      </div>
    );
  }

}

function PrintCounter({counter}){
  console.log(counter, 'change');
  return(
    <div>
      actual value: { counter }
    </div>
  );
}
// initialize this.state with props
class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: this.props.initialCounter 
    } 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log(this);
  }
  increment(){
    this.setState((state)=>{
      return {...state, counter: state.counter +1}
    })
  }
  decrement(){
    if(this.state.counter > 0){
      this.setState((state)=>{
        return {...state, counter: state.counter - 1}
      });
    }
  }
    render(){
      let { counter } = this.state;
      return (
        <div className="counter-wrap">
          <button onClick= {this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <PrintCounter counter = { counter }></PrintCounter>
        </div>
      );
    }
}
Counter.defaultProps = {
  initialCounter: 25
}
class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Counter initialCounter={40}></Counter>
        <p>first component with state</p>
      </div> 
      );
  }
}

export default App;


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