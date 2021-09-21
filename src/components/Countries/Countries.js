import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from Countreis</h1>
            <p>Count: {countries.length}</p>
            {
                countries.map(country => <Country name={country.name} population={country.population}></Country>)
            }
            
        </div>
    );
};



export default Countries;