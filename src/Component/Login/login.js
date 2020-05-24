import React from 'react';


const login = () => {
    return(
        <div>
            <p>User Name or Email</p>
            <input type= "text" placeholder="User name or Email" /> 
            <p>Password</p>
            <input type= "password" placeholder="Password" /> <br />
            <button type="button">login</button>
        </div>
    );
}

export default login