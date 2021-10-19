
import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    
    const handleGoogleSignin = () => {
        signInUsingGoogle()
         .then(result => {
           history.push(redirect_url)
            })
    }
    return (
       <div className="body">
            
            <div className="pt-5 border-5 p-5">
                
            
            <NavLink to="/loginwithemail">
                <Button>Continue With Email</Button>
            </NavLink>
            <br/>
            <Button onClick={handleGoogleSignin}> Continue With Google</Button>
            <br/>
            <span>{error}</span>
         </div>
        </div>
    );
};

export default Login;