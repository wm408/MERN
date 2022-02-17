import React, {useState} from 'react';

const Form = (props) => {

    const {studentList, setStudentList} = props;

    const [name, setName] = useState("");
    const [tallClub, setTallClub] = useState(false);
    const [favStack, setFavStack] = useState("");
    
    const submitHandler = (e) =>{
        e.preventDefault(); // prevent browser refresh so we can keep state.

        setStudentList([...studentList, //include everything from the getter that exists already using spread '...studentList', then make an object and include values being submitted.
        {
            name: name,
            tallClub: tallClub,
            favStack: favStack
        }
        ]);

        setName("");
        setFavStack("");
        setTallClub(false);
    }

    return(
        <div>
            <h1>Add a Student!</h1>

            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                    <label>Name: </label>
                    <input onChange={(e) => {
                        // console.log(e);
                        // console.log(e.target);
                        // console.log(e.target.value);
                        setName(e.target.value);
                    }} 
                    value={name}
                    type="text" /> 

                    {
                        name.length > 0 && name.length < 3?
                        <p>Your name must be at least 3 characters long!</p>
                        :null
                    }

                </div>

                <div>
                    <label>Tall Club?</label>
                    <input type="checkbox" 
                    onChange={(e) => {
                        // console.log(e.target);
                        setTallClub(!tallClub);
                    }}
                    checked={tallClub}
                    />
                </div>

                <div>
                    <label>Fav Stack: </label>
                    <select onChange={(e) => setFavStack(e.target.value)}
                    value={favStack}
                    >
                        <option default>Make Your Selection</option>
                        <option value="mern">MERN</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="all">All</option>
                    </select>
                </div>

                <button>Add a student</button>

            </form>
        </div>
    )
}

export default Form;