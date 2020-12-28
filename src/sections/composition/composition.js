import { Component } from 'react';


class BaseButton extends Component {
    render(){
        const {borderColor, label } = this.props
        return <button style={{borderColor}}> {label} </button>
    }
}
BaseButton.defaultProps = {
    borderColor:'green',
    label: 'click here'
}

const ButtonDanger = () => {
    return <BaseButton borderColor={'red'} label={'click button danger'}/>
}
const ButtonWithLabel = ({legend}) => {
    return <div>
        <BaseButton borderColor={'blue'} label={'click button with label'}/>
        <small>{ legend }</small>
    </div>
}
export default  class ButtonWithComposition extends Component {
    render(){
        return <>
        <h5>Composition vs inheritance</h5>
        <ButtonDanger/>
        <ButtonWithLabel legend={'this is an small legend'}/>
        </>
    }
}