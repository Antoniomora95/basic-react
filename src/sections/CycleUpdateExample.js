import { Component } from 'react';
import PropTypes from 'prop-types'
const ANIMAL_IMAGES = {
    cat: 'https://images-na.ssl-images-amazon.com/images/I/61CzZ1b1NhL.jpg',
    dolphin: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/f_auto,q_auto,w_1100/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg',
    panda: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Ailurus_fulgens_RoterPanda_LesserPanda.jpg'
}
const ANIMAL_LIST = Object.keys(ANIMAL_IMAGES);
//https://itnext.io/how-to-updating-state-on-prop-changes-2296a03ef08c
 
class AnimalImage extends Component {
    static propTypes = {
        animal: PropTypes.oneOf(ANIMAL_LIST)
    }
    constructor(props){
        super(props)
        this.state = {
            src: ANIMAL_IMAGES[this.props.animal],
            stp:'ds'
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.animal !== nextProps.animal){
            console.log(nextProps, 'nextProps -- 2');
            return true;
        } if(this.state.src !== nextState.src){
            console.log(nextState, 'nextState -- 2');
            // since state is actually changing, render is called again
            // then i implemented componentDidUpdate and this is called again because of the previous update
            // componentDidUpdate won't enter to setstate at least because the prev and current props are the same
            return true;
        }
         else {
            return false;
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        //console.log('componentAbouttoUpdate -- 4', prevProps.animal !== this.props.animal);
        console.log('componentAbouttoUpdate -- 4', prevProps.animal !== this.props.animal);
        if(prevProps.animal !== this.props.animal){ 
            console.log('is going to -- 5', this.props.animal);
            this.setState((state) => {
                return {
                    ...state, src: ANIMAL_IMAGES[this.props.animal]
                }})
        }
    }
    
    render(){
        console.log('render -- 1, 3 ');
        let { src } = this.state
        let { animal } = this.props
        return(
            <div>
                <p>Selected: { animal }</p>
                <img src={src} alt={ animal } width={'150px'}/>
            </div>
            //props are updated with every update in the parent, even though the state does not
        );
    }
}
AnimalImage.defaultProps = {
    animal: 'panda'
}
class CycleUpdateExample extends Component {
    state = {
        animal: 'panda'
    }
    setAnimal(animal){
        this.setState({ animal });
    }
    render(){
        let { animal } = this.state;
        return(
            <div> 
                <h4>Cycle update, ComponentWillReceiveProps, animal in parent: {animal}</h4>
                {
                   ANIMAL_LIST.map(animalItem => {
                       return <button onClick={() => this.setAnimal(animalItem)} key={ animalItem } disabled={animalItem === animal}> Set { animalItem } </button>
                   })
                }
                <AnimalImage animal={ animal }/>
            </div>
        );
    }
}

export default CycleUpdateExample;