import React from 'react';

const Tabs = (props) => {
    const {tabArr, activeTab, setActiveTab} = props;

    const chosenTab = (index) => {
        setActiveTab(index);
    }
    
    const styleTab = (index) => {
        if (index === activeTab) {
            return "tabPicked";
        } else {
            return "tabNotPicked";
        }
    }

    return(
        <div>
            <div className="container">
            {
                tabArr.map((item, index) => (
                <div className={`tab ${styleTab(index)}`} onClick={(e) => chosenTab(index) }
                key={index}>
                    { item.name }
                </div>
                ))
            }
            </div>
            {/* {children} */}
        </div>
    )
}

export default Tabs;