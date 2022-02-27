import React, {useState} from 'react';

const TodoList = (props) => {

    const {listArray, setListArray} = props;
    const [topic, setTopic] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        // make a new array which includes all previous array items + 1 new item.
        setListArray([...listArray, {
            topic: topic,
            completed: false,
            id: Math.floor(Math.random() * 10000).toString()
        }
        ])
        setTopic("");
    };

    return(
        <form onSubmit={ addItem }>
            <div className="container">
                <input className="itemInput" type="text" size="25" onChange={(e) => setTopic(e.target.value)} value={topic} />
                <button className="addButton">Add</button>
            </div>
        </form>
    )
}

export default TodoList;