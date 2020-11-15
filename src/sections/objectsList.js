import React, { Component } from 'react';
import cars from './cars.json'
class ObjectList extends Component {

    render(){
        //you cannot use a repeated value in the array as a key, in this case
        //react will think that it is the same element and will discard the 2nd+
        return(
            <div>
                <ul>
                    {
                        cars.map(car => {
                            return(
                                <li key={ car.id }>
                                    <p><strong>id: </strong>{car.id}</p>
                                    <p><strong>name: </strong>{car.name}</p>
                                    <p><strong>company: </strong>{car.company}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default ObjectList;