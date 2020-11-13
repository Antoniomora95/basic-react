import { Component } from 'react';
import getUsers from './genericService';

class PrintValues extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.setResponse = this.setResponse.bind(this);
    }
    setResponse(data) {
        this.setState(state => {
            return {
                ...state,
                data
            }
        });
    }
    componentDidMount(){
        getUsers().then(data => {
            this.setResponse(data);
        });
    }
    render(){
        let { data } = this.state;
        let list = data.map(user => {
            console.log(user, 'val');
            let { first_name, last_name, id } = user;
            return <li key={ id }> { id }.- { first_name }: { last_name } </li>
        })
        return(
            <div>
                <h4>Here you will find a list</h4>
                <ul> { list } </ul>
            </div>
        );
    }
}
export default PrintValues;