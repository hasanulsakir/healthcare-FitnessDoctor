import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './doctor.css'

const Doctors = (props) => {
    const history = useHistory();
    const {id, name, designation, doctor_img } = props.doctor;
    const detailsDoctor = () => {
    
    history.push(`/doctordetails/${id}`);
  }
    return (
        <Col>
      <Card className="cardSize rounded-3 shadow-lg" >
      
                <Card.Body >
                    <div>
                        <img className="doctorImg" src={doctor_img} alt="doctor Img" />
                    </div>
                    <div className="mt-3">
                          <Card.Title className="fs-5">{name}</Card.Title>
                    <p className="fs-5 ">{designation}</p>
                  </div>
                    <div className="mt-3">
                         <Button onClick={detailsDoctor} className="btn border-2 shadow border-primary rounded-5 profileButton">See Profile</Button>
                  </div>
                   
              
        </Card.Body>
            </Card>
            </Col>
    );
};

export default Doctors;