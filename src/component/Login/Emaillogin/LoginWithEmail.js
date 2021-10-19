import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LoginWithEmail = () => {
    
    const { loginWithEmail, setRegisterEmail, setRegisterPassword, error } = useAuth();
    
    return (
    
        <div>
             <form onSubmit={loginWithEmail} >
                <input onBlur={setRegisterEmail} type="email" name="email" placeholder="Enter Your Email"  required/>
                <br />
                <input onBlur={setRegisterPassword} type="password" name="password" placeholder="Password" required />
                <br />
                <button type="submit">Login</button>
                <br/>
                <span>Create New Account?  <Link to="/signup"> Register</Link></span>
            </form>
            <span>{error}</span>
        </div>
    );
};

export default LoginWithEmail;