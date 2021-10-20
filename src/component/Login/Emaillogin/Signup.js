import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {
        const {  setRegisterEmail,setRegisterPassword,handleRegistretion,error } = useAuth();

    return (
        <div className="bodySize">
        <div className="bg-light shadow-lg w-75 mx-auto my-5 border-5 py-5 rounded-3">
         <h2 className="fs-2 fw-bold">Register</h2>
      
             <form onSubmit={handleRegistretion} >
                    <div class="w-50 d-block mx-auto">
                            <label for="email" class="d-block text-start form-label ">Email</label>
                        <input onBlur={setRegisterEmail} class="form-control" id="email" type="email" name="email" placeholder="Enter Your Email" required />
                       
                    </div>
                     <div class="w-50 mt-3 d-block mx-auto">
                            <label for="password" class="d-block text-start form-label ">Password</label>
                            <input onBlur={setRegisterPassword} type="password" name="password" placeholder="Password" required class="form-control" id="password"/>
                    </div>
                <button className=" mt-3 w-50 d-block mx-auto btn btn-primary" type="submit">Register</button>
                
                <span className="mt-3 fs-5 d-block text-black fw-bold">Already Have An Account?  <Link to="/loginwithemail"> Login</Link></span>
            </form>
                <span className="text-danger fs-5">{error}</span>
                <p className="my-1 text-black-50 fw-bold">Or</p>
        <Link to='/login' className="text-decoration-none"> <button className=" my-3 w-50 d-block mx-auto btn btn-dark ">Login With Google</button></Link>
              
        </div>
        </div>
    );
};

export default Signup;