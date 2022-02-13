import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [ theAge, setTheAge ] = useState(age);
    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { theAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ (event) => setTheAge(theAge + 1) }>Birthday button for { firstName } { lastName }</button>
        </div>
    )
};

export default PersonCard;