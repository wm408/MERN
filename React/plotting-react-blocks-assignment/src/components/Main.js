import React from 'react';

const Main = (props) => {
    const {children} = props;
    return(
        <div className="main">
            {children}
        </div>
    )
}

export default Main;