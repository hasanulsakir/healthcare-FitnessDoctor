import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './contactus.css'

const ContactUs = () => {
    return (
        <div className="bodySizes d-block mb-5 mt-5">
            <div className="d-flex flex-column align-content-center align-items-center">
                 <p className="text-center text-danger fw-bold fs-1 mt-5">Under Construction</p>
                <Link to='/home'>  <Button className="border-0 bg-danger fs-5 rounded-2 text-white py-3 px-5">Go Back Home <FontAwesomeIcon icon={faArrowCircleRight}/></Button></Link>
           </div>
        </div>
    );
};

export default ContactUs;