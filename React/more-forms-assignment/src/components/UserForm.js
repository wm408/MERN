import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, emailAddress, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                {firstName.length > 0 && firstName.length < 2 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                {lastName.length > 0 && lastName.length < 2 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={emailAddress} onChange={ (e) => setEmailAddress(e.target.value) } />
                </div>
                {emailAddress.length > 0 && emailAddress.length < 5 ? <p>Email must be at least 5 characters</p> : null}
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length > 0 && password.length < 8 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                
                {confirmPassword !== password ? <p>Passwords do not match</p> : null}
                <input type="submit" value="Create User" />
            </form>
            <div className="form-data">
                <h3>Your Form Data</h3>
                <p>
                <label>First Name: </label>{ firstName }
                </p>
                <p>
                <label>Last Name: </label>{ lastName }
                </p>
                <p>
                <label>Email: </label>{ emailAddress }
                </p>
                <p>
                <label>Password: </label>{ password }
                </p>
                <p>
                <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
    );
}
    
export default UserForm;