import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css'

 const ServiceCard = (props) => {
   const history = useHistory();
    const {id, title, service_img,Description } = props.service;
//   const url = `/serviceDetails/${id}`;

 
  
  const detailsCourse = () => {
    
    history.push(`/servicedetails/${id}`);
  }
    return (
        
      <Col>
        <div className="rounded-5 shadow-sm">
      <Card className="cardSize">
        <Card.Img className="card-img" variant="top" src={service_img} />
            <Card.Body className="cardBgColor">
              <Card.Title className="fs-5">{title.slice(0, 30)}</Card.Title>
              <p className="fs-5 text-start">{Description.slice(0, 50)}</p>
              <Button className="cardBtn" onClick={detailsCourse}>Details</Button>
            </Card.Body>
            </Card>
            </div>
            </Col>
    );
};

export default ServiceCard;