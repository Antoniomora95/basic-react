import { Component } from 'react';

export default class LifeCycles extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        console.log('component was initialized');
    }
    componentWillUnmount(){
        console.log('component will be destroyed');
    }

    render(){
        return <div style={{fontSize: '30px'}}> life is good yei</div>
    } 
}