import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './service.css'

const ServiceDetails = () => {
    let { serviceID } = useParams();
    const [serviceDetails, setserviceDetails] = useState([]);
    const [singleService, setsingleService] = useState({});

   useEffect(() => {
   fetch('/services.json')
        .then(res => res.json())
        .then(data => setserviceDetails(data));
   }, []);
    
    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === serviceID)
        setsingleService(foundService);
    }, [serviceDetails]);

    return (
        <div>
             <Col>
      <Card className="cardSize shadow-lg">
        <Card.Img className="singlecard-img" variant="top" src={singleService?.service_img} />
        <Card.Body className="cardBgColor">
                    <Card.Title className="fs-2 mt-4 fw-bold">{singleService?.title}</Card.Title>
                        <p className="fs-5 py-2 px-5 text-start w-75 mx-auto">{singleService?.Description}</p>
                        
                            
          <p className="fs-5"> Package Price:  <Button className="cardBtn" > $ {singleService?.price}</Button>
          
           </p>
          
          
        </Card.Body>
            </Card>
            </Col>
            
        </div>
    );
};

export default ServiceDetails;