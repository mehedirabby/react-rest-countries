import React from 'react';
import './country.css'


const country = (props) => {
    const {area,name,region,flags}=props.country
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small> Area:{area}</small></p>
            <p>Region:{region}</p>
           
        </div>
    );
};

export default country;