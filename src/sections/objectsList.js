import React, { Component } from 'react';
import cars from './cars.json'


function CarItem(props) {
    const { car } = props;
    return (
        <li className="CarItem" onClick={()=> console.log(car)}>
            <p>separate component</p>
            <p><strong>id: </strong>{car.id}</p>
            <p><strong>name: </strong>{car.name}</p>
            <p><strong>company: </strong>{car.company}</p>
        </li>
    );
}

class ObjectList extends Component {
    render() {
        //you cannot use a repeated value in the array as a key, in this case
        //react will think that it is the same element and will discard the 2nd+
        return (
            <div>
                <ul>
                    {
                        // separate the item in a new component
                        cars.map(car => {
                            return ( car.company === 'Mercedes' &&  <CarItem key={car.id} car={car}  />  
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default ObjectList;