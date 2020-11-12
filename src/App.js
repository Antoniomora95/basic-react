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


class Title extends Component {
  // default props
  render(){
    return(
      <h3>{ this.props.title }</h3>
    );
  }
}
Title.defaultProps = {
  title: 'this is the default title'
}
function App() {
  let name = 'Antonio Mora';
  let text = 'I am learning the basics in react';
  let number = 9;
  return (
    <div className="App">
      <Title />
    </div>
  );
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