import React from 'react';

const BoxForm = (props) => {

    const {boxGroup, setBoxGroup, boxColor, setBoxColor, widthHeight, setWidthHeight} = props;

    const addColor = (e) => {
        e.preventDefault();
        setBoxGroup([...boxGroup,
        {
            boxColor: boxColor,
            widthHeight: widthHeight + "px"
        }
        ]);
        setBoxColor("");
        setWidthHeight("");
    }

    return(
        <form onSubmit={ addColor }>
            <div className="input-container">
                <label>Color: </label>
                <input type="text" value={boxColor} onChange={ (e) => setBoxColor(e.target.value) } />
            </div>
            <div className="input-container">
                <label>Size in pixels: </label>
                <input type="text" value={widthHeight} onChange={ (e) => setWidthHeight(e.target.value) } />
            </div>
            <button>Add</button>
        </form>
    );
}

export default BoxForm;