import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    return (
        <div className="country">
            <h4>Country: {props.name}</h4>
            <h5>Populations:{props.population}</h5>
        </div>
    );
};

export default Country;