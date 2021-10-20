import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../login.css'

const LoginWithEmail = () => {
    
    const { loginWithEmail, setRegisterEmail, setRegisterPassword, error } = useAuth();
    
    return (
    
        <div className="bodySize">
  <div className="bg-light shadow-lg w-75 mx-auto my-5 border-5 py-5 rounded-3">
               <h2 className="fs-2 fw-bold">Login</h2>
                <form onSubmit={loginWithEmail} >
                    <div class="w-50 d-block mx-auto">
                            <label for="email" class="d-block text-start form-label ">Email</label>
                            <input onBlur={setRegisterEmail} class="form-control" id="email" type="email" name="email" placeholder="Enter Your Email" required />
                    </div>
                     <div class="w-50 mt-3 d-block mx-auto">
                            <label for="password" class="d-block text-start form-label ">Password</label>
                            <input onBlur={setRegisterPassword} type="password" name="password" placeholder="Password" required class="form-control" id="password"/>
                    </div>
                <button className=" mt-3 w-50 d-block mx-auto btn btn-primary" type="submit">Login</button>
                
                <span className="mt-3 fs-5 d-block text-black fw-bold">Create New Account?  <Link to="/signup"> Register</Link></span>
            </form>
            <span className="text-danger fs-5">{error}</span>
</div>
        </div>
    );
};

export default LoginWithEmail;