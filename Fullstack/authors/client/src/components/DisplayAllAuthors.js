import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayAllAuthors = (props) => {

    const { authors, setAuthors, deleteAuthor } = props;
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    return(
        <div>
            <hr />
            <Link to={`/new`}>Add an author</Link>
            <p className="purple-text">We have quotes by:</p>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions available</th>
                </thead>
                <tbody>
                    {
                    authors.map((author, index)=>{
                        return (
                        <tr key={author._id}>
                            <td>
                                <p className="purple-text">{author.authorName}</p>
                            </td>
                            <td>
                                <button onClick={()=> deleteAuthor(author._id)}>Delete Me</button>
                                <button onClick={()=> navigate(`/edit/${author._id}`)}>Edit Me</button>
                            </td>
                        </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAllAuthors;