import React, { Component } from 'react'

class ButtonComponentError extends Component {
    state = {
        throwError: false
    }
    render(){
        if(this.state.throwError){
            throw new Error('Error coming from button hehe')
        }

        return <button onClick={()=> this.setState({throwError: true})}>Throw error</button>
    }
}
class DidCatchExample extends React.Component {
    state = {
        hasError: false,
        errorMsg: ''
    }
    componentDidCatch(error, errorInfo){
        this.setState({hasError: true, errorMsg: error.toString()})
    }

    render(){
        const { hasError, errorMsg } = this.state
        return <div>
            Example for componentdidcatch
            <ButtonComponentError/>
        {
            hasError && <p>There was an error in: { errorMsg } </p>
        } 
        </div>
        
    }
}

export default DidCatchExample;