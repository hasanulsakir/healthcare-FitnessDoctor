
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import {  NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'


const Login = () => {
    const {user, signInUsingGoogle, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    let isLogin = user.email;
    useEffect(() => {
        if (isLogin) {
            history.push('/home');
        } else {
          console.log(user);
      }
    }, []);
    const handleGoogleSignin = () => {
        signInUsingGoogle()
         .then(result => {
           history.push(redirect_url)
            })
    }
    return (
       <div className="body bodySize align-items-center">
            
            <div className="bg-light shadow-lg w-75 mx-auto my-5 border-5 py-5 rounded-3">
                
            
            <NavLink to="/loginwithemail">
                    <Button className="mt-2 py-2 border-0 w-50 btn btn-dark"><FontAwesomeIcon icon={faEnvelope} className="mx-2"/> Continue With Email</Button>
            </NavLink>
            <br/>
            <Button className="mt-2 py-2 fs-6 border-0 w-50 btn btn-danger" onClick={handleGoogleSignin}> <FontAwesomeIcon icon={faUser} className="mx-1"/> Continue With Google</Button>
            <br/>
            <span>{error}</span>
            </div>
            
        </div>
    );
};

export default Login;