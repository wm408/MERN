import React from 'react';

const DisplayList = (props) => {

    const {listArray, setListArray} = props;

    const deleteTopicById = (idFromBelow)=>{
        // filter returns a NEW array of every array item being filtered through
        //which meets its requirements
        //Here, every student whose id does not match the "idFromBelow" 
        //(id of student clicked on)
        //will be returned in a new array, eliminating the old with our setter
        setListArray(listArray.filter((item, index)=> item.id !== idFromBelow))

    };

    const toggleCompleted = (item)=>{
        item.completed = !item.completed;
        setListArray([...listArray]);
    }

    const styleChecked = (completed) => {
        if (completed === true) {
            return "taskCompleted";
        } else {
            return "taskNotCompleted";
        }
    }

    return(
        <div className="container">
            {listArray.map((item, index) => (
                <div className="list" key={index}>
                    <p className={`listText ${styleChecked(item.completed)}`}>{item.topic}</p>
                    <input type="checkbox" onChange={(e)=>{toggleCompleted(item);}} className="checkBoxMargin" checked={item.completed}/>
                    <button className="delButton" onClick={()=>{deleteTopicById(item.id);}}>Delete</button>
                </div>
                ))
            }
        </div>
    )
}

export default DisplayList;