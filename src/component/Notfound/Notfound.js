import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFound from '../../images/404/404.gif'
import './notfound.css'

const Notfound = () => {
    return (
        <div className='notFoundBody d-flex flex-column justify-content-center'>
            <img className="notFoundImg" src={NotFound} alt="404"/>

            <NavLink to="/Home"><button className="goBack rounded-4">Go Back Home <FontAwesomeIcon icon={faArrowCircleRight}/></button></NavLink>
        </div>
    );
};

export default Notfound;