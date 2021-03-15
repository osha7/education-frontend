import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'redux';

function Signin(props) {

    const [user_name, setUserName] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [admin, setAdmin] = useState('')
    

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleAdminChange = (e) => {
        setAdmin(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="signinContainer">
            <form onSubmit={handleSubmit} >
                <div className="field" >
                    <label>Username</label>
                    <input type="text" onChange={handleUserNameChange} value={user_name} />
                </div>
                <div className="field" >
                    <label>First Name</label>
                    <input type="text" onChange={handleFirstNameChange} value={first_name} />
                </div>
                <div className="field" >
                    <label>Last Name</label>
                    <input type="text" onChange={handleLastNameChange} value={last_name} />
                </div>
                <div className="field" >
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field" >
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <div className="field" >
                    <label>Admin</label>
                    <input type="checkbox" onChange={handleAdminChange} value={admin} />
                </div>

            </form>
            
        </div>
    );
}

export default Signin;