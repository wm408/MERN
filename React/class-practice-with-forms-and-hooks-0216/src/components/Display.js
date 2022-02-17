import React, {useState} from 'react';

const Display = (props) => {

    const {studentList} = props;

    return(
        <div>
            <h1>Display All Students!!!</h1>
            {
                studentList.map((student, index)=> { // 'student' is like a variable to go through each item in our array. 'index' is just what # of the array are you in, i.e.: 0, 1, 2, 3, 4.
                    return(
                        <div key={index}>
                            <p>{student.name}</p>
                            <p>{student.favStack}</p>
                            
                            {
                                student.tallClub?
                                <p>Welcome to the tall club!!!</p>
                                :<p>Sorry shorty!!!</p>
                            }
                            {/* <p>{student.tallClub}</p> */}
                        </div>
                    )
                })
            }
        </div>
    )


}

export default Display;