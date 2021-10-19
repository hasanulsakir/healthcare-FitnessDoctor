import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFound from '../../images/404/404.gif'
import './notfound.css'

const Notfound = () => {
    return (
        <div className='notFoundBody'>
            <img src={NotFound} alt="404"/>

            <NavLink to="/Home"><button className="goBack">Go Home</button></NavLink>
        </div>
    );
};

export default Notfound;