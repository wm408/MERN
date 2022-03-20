import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateAuthor = () => {

    const { id } = useParams();
    const [ authorName, setAuthorName ] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                // console.log(res.data.authorName);
                setAuthorName(res.data.authorName);
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            authorName,
        })
            .then((res)=>{
                console.log(res.data);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <hr />
            <Link to={`/`}>Home</Link>
            <p className="purple-text">Edit this author:</p>
            <form onSubmit={updateAuthor}>
                <p className="paragraph">
                    <label className="margin-right"></label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
                    <span>Name: </span>
                    <input type="text" onChange={(e)=>setAuthorName(e.target.value)} value={authorName}/>
                    {
                            errors.authorName?
                            <span>{errors.authorName.message}</span>
                            :null
                    }
                </p>
                <button onClick={(e)=>navigate('/')}>Cancel</button>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UpdateAuthor;