import React, { Component } from 'react';


class LogoutButton extends Component {
    render() {
        return(
            <div>
                <p>User logged in</p>
                <button>-- log out --</button>
            </div>
        );
    }
}
class LoginButton extends Component {
    render(){
        return(
            <div>
                <p>User Authentication</p>
                <button>-- Login --</button>
            </div>
        );
    }
}
export default class ConditionalSection extends Component {
    constructor(props){
        super(props);
        const { isAuthenticated } = this.props;
        this.state = { isAuthenticated }
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h4>Conditinal rendering, like angular ngif</h4>
                { this.state.isAuthenticated && <LogoutButton/> }
                { !this.state.isAuthenticated && <LoginButton/> }
            </div> 
        )
    }
}
ConditionalSection.defaultProps = { isAuthenticated: false }
