import { Component, PureComponent } from 'react';
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
            console.log('nextProps -- 2');
            return true;
        } if(this.state.src !== nextState.src){
            console.log('nextState -- 2');
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
                //some how shouldComponentUpdate is executed here
                return {
                    ...state, src: ANIMAL_IMAGES[this.props.animal]
                }})
        }
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount --');
    }
    
    render(){
        let { src } = this.state
        let { animal } = this.props;
        console.log(src, animal, 'render -- 1, 3 ');
        return(
            <div>
                <p>Selected: { animal }</p>
                <img src={src} alt={ animal } width={'150px'}/>
            </div>
            //props are updated with every update in the parent, even though the state does not
        );
    }
}
const ButtonSetAnimal = ({onClickFn, animalItem, animal}) => {
    return <button
        onClick={()=> onClickFn()}
        disabled={animalItem === animal}
        > Set animal:  { animalItem } </button>
}
class CycleUpdateExample extends Component {
    state = {
        animal: 'panda',
        showAnimalImage: true
    }
    setAnimal(animal){
        this.setState({ animal });
    }
    _renderButton(animalItem, animal) {
        return <ButtonSetAnimal
            onClickFn = {() => this.setAnimal(animalItem)}
            animal = {animal}
            key = { animalItem }
            animalItem = {animalItem}
        />
    }
    render(){
        let { animal, showAnimalImage } = this.state;
        return(
            <div> 
                {
                   ANIMAL_LIST.map(animalItem =>  this._renderButton(animalItem, animal))
                }
                { !showAnimalImage && <button onClick={() => this.setState({showAnimalImage: true})}>Render</button> }
               { showAnimalImage && <button onClick={() => this.setState({showAnimalImage: false})}>Destroy</button> }
                { showAnimalImage && <AnimalImage animal={ animal }/>}
            </div>
        );
    }
}

export default CycleUpdateExample;