import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const {name, population, flag} = props.country;
    return (
        <div className="country">
            <h4>Country: {name}</h4>
            <img src={flag} alt="" />
            <h5>Populations:{population}</h5>
        </div>
    );
};

export default Country;