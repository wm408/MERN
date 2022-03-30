/* 
Class Component
When creating a Class Component there are a couple things we have to do in order for it to be a valid component. 
Each class must:
    - Have a name starting with a capital letter.
    - Extend React.Component.
    - Have a render() method that returns a React Element either by JSX or React.createElement(). 
        Below, we are using JSX.
*/

import React, { Component } from 'react';
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;