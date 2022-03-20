import axios from 'axios';
import React, { useState } from 'react';
import DisplayAllAuthors from '../components/DisplayAllAuthors';

const Main = () => {

    const [ authors, setAuthors ] = useState([]);
    
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res)=>{
                console.log(res.data); // the object we just deleted from Mongo.
                let filteredAuthors = authors.filter((singleAuthor)=>{ // also need to remove from state by using filter
                    return singleAuthor._id !== authorId;
                });
                setAuthors(filteredAuthors);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            <DisplayAllAuthors
            authors={authors}
            setAuthors={setAuthors}
            deleteAuthor={deleteAuthor}
            />
        </div>
    )
}

export default Main;