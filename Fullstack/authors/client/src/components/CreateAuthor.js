import React, {  useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const CreateAuthor = (props) => {
    // const { authors, setAuthors } = props;
    const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState('');
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            authorName,
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
        }

    return(
        <div>
            <hr />
            <Link to={`/`}>Home</Link>
            <p className="purple-text">Add a new author:</p>
            <form onSubmit={onSubmitHandler}>
                <p className="paragraph">
                    <label className="margin-right"></label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
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

export default CreateAuthor;