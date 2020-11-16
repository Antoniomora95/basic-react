import { Component } from 'react';

export default class OnClickHandler extends Component {
    constructor(){
        super()
        this.state = {
            clientX : 0,
            clientY : 0,
            random: 0
        }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleClick(e){
        // what is the value of this when you are not binding to component 
        console.log(this);
    }
    handleMouseMove (event) {
        let { clientX, clientY } = event;
        this.setState({ clientX, clientY })
    }
    /*boxShadow: 'the shadow position in x ' */
    render(){
        const { clientX, clientY, random } = this.state;
        return(
            <div>
                <h3>The on click event</h3>
                <button onClick={ this.handleClick }>Click me!</button>

                <div style={{ borderRadius:'4px', margin: 20, padding:'20px', boxShadow: '2px 2px 6px 2px grey', fontSize: '30px'}} onMouseMove = {this.handleMouseMove}>
                    clientX : { clientX }  |   clientY : { clientY } this is a random value: {random}
                </div>
            </div>
        );
    }
}