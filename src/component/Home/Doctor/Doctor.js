import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctors from './Doctors';
import './doctor.css'

const Doctor = () => {
   
    const [doctors, setdoctors] = useState([]);
    
   useEffect(() => {
   fetch('./doctorlist.json')
        .then(res => res.json())
        .then(data => setdoctors(data));
    }, []);

    return (
      <div className="bgImg ">
            <div className="bgOverlay py-5 px-5">
                <h2 className="d-2 fw-bold mb-5">Meet Our Team</h2>
            <Row xs={2} md={4} className="pb-5 g-4" >
                {
                    doctors.map(doctor => <Doctors
                        doctor={doctor}
                        key={doctor.id}></Doctors>)
                }
            
            </Row>
           </div>

        </div>
    );
};

export default Doctor;