import { Component } from 'react'

export default class Forms extends Component{
    constructor(){
        super();
        this.state = {
            sending: false,
            formFields: {
                name: '',
                email: 'default@gmail.com',
                married: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChanges = this.handleFormChanges.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState(state => ({...state, sending: true}));
        setTimeout(() => {
            this.setState(state => ({...state, sending: false}));
        }, 1000);
    }
    handleFormChanges({target}){
        let { name, value, type, checked  } = target;
        let {value: lastnameValue} = this.lastnameInput
        console.log(lastnameValue);
        this.setState(state => {
            const {formFields} = state;
            value = type === 'checkbox' ? checked : value;
            return {
                ...state,
                formFields:{
                    ...formFields,
                    [name]: value
                } 
            }
        })
    }
    cssClass() {
        const { sending } = this.state;
        return sending ? 'sending' : '';
    }
    render(){
        const { sending } = this.state;
        const { name, email, married } = this.state.formFields;
        return(
        <div>
            <h4>Forms in react js</h4>
            <form onSubmit={ this.handleSubmit }>
                <p>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={name} onChange={ this.handleFormChanges }/>
                </p>
                <p>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name='email' value= {email} onChange={ this.handleFormChanges }/>
                </p>
                <p>
                    <label htmlFor='married'>Are you married?</label>
                    <input type='checkbox' id='married' name='married' checked={married} onChange={ this.handleFormChanges }/>
                </p>
                <p>
                    <label htmlFor='lastname'>lastname</label>
                    <input type='text' id='lastname' name='lastname' ref={el => this.lastnameInput = el}/>
                </p>
                <button disabled={ sending }>Send info</button>
               
            </form>
            <div className={this.cssClass()}>
            {
                JSON.stringify(this.state)
            }
            </div>
        </div>
        );
    }
}