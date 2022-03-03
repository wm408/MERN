import React from 'react';
import {useParams} from 'react-router-dom';

const WordNumber = (props) => {
    const {string, textColor, bgColor} = useParams();
    return(
        <div>
            {
                isNaN(string)?
                <p className="padding" style={{color:textColor, backgroundColor:bgColor}}>This is the word: {string}</p>
                :<p>This is a number: {string}</p>
            }
        </div>
    )
}

export default WordNumber;