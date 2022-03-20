import React from 'react';
import {Link} from 'react-router-dom';

const Error = ()=>{
    
    return(
        <div>
            <hr />
            <Link to={`/`}>Home</Link>
            <p className="purple-text">Error:</p>
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?"</p>
            <Link to={"/new"}>Create an Author</Link>
        </div>
    )
}


export default Error;