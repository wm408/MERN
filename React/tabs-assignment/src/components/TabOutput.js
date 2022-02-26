import React from 'react';

const TabOutput = (props) => {

    const {tabArr, activeTab} = props;

    return(
        <div className="displayContainer">
            <h2>{ tabArr[activeTab].text }</h2>
        </div>
    )
}

export default TabOutput;