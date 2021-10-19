import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css'

 const ServiceCard = (props) => {
   const history = useHistory();
    const {id, title, service_img } = props.service;
//   const url = `/serviceDetails/${id}`;

 
  
  const detailsCourse = () => {
    
    history.push(`/servicedetails/${id}`);
  }
    return (
        
  <Col>
      <Card className="cardSize shadow-lg">
        <Card.Img className="card-img" variant="top" src={service_img} />
        <Card.Body className="cardBgColor">
                    <Card.Title className="fs-5">{title}</Card.Title>
                   
            <Button className="cardBtn" onClick={detailsCourse}>Details</Button>
          
          
        </Card.Body>
            </Card>
            </Col>
    );
};

export default ServiceCard;