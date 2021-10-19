import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
        const {  setRegisterEmail,setRegisterPassword,handleRegistretion,error } = useAuth();

    return (
        <div>
             <form onSubmit={handleRegistretion} >
                <input onBlur={setRegisterEmail} type="email" name="email" placeholder="Enter Your Email"  required/>
                <br />
                <input onBlur={setRegisterPassword} type="password" name="password" placeholder="Password" required />
                <br />
                <button type="submit">Register</button>
                <br/>
                <span>Already Have An Account?  <Link to="/loginwithemail"> Login</Link></span>
            </form>
            <span>{error}</span>
        </div>
    );
};

export default Signup;