import React from 'react';

const DisplayBox = (props) => {

    const {boxGroup} = props;

    return(
        <div className="box-container">
            {/* Boxes */}
            {
                boxGroup.map((box, index)=>(
                    <div style = {{backgroundColor: box.boxColor,
                    width: box.widthHeight, height: box.widthHeight, margin: "12px"}
                    }
                    key={index}>
                    </div>
                ))
            }
        </div>
    )


}

export default DisplayBox;