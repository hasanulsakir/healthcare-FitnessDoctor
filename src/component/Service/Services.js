import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services, setServices] = useState([]);
    
   useEffect(() => {
   fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0,6)));
    }, []);

    return (
      <div className="mt-3 p-5">
           <h2 className="d-2 fw-bold mb-5"> Services</h2>
            <Row xs={1} md={3} >
                {
                    Services.map(service => <ServiceCard
                        service={service}
                        key={service.id}></ServiceCard>)
                }
            
            </Row>
              <Link to="/service">  <Button className="cardBtn mt-5">See All</Button></Link>
         
            </div>
    );
};

export default Services;