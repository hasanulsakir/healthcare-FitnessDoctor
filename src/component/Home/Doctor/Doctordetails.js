import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const Doctordetails = () => {
    let {doctorID} = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setsingleDoctor] = useState({});

   useEffect(() => {
   fetch('/doctorlist.json')
        .then(res => res.json())
        .then(data => setDoctorDetails(data));
   }, []);
    
    useEffect(() => {
        const foundDoctor = doctorDetails.find(doctor => doctor.id === doctorID)
        setsingleDoctor(foundDoctor);
    }, [doctorDetails]);

    return (
        <div className="bodySize">
             <Col>
      <Card className=" cardBgColor  cardSize mx-auto w-50 d-flex flex-row my-2 rounded-0 shadow-lg">
                    <Card.Img className="w-25 rounded-2 mx-2 p-2" variant="left" src={singleDoctor?.doctor_img} />
                    
                    <Card.Body className=" text-start">
                    <Card.Title className="fs-2 mt-4 fw-bold">{singleDoctor?.name}</Card.Title>
                        <Card.Title className="fs-2 mt-4 fw-bold">{singleDoctor?.designation}</Card.Title>
                    </Card.Body>
            </Card>
            </Col>
            
        </div>
    )
};

export default Doctordetails;