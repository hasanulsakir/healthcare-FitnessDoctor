import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const Service = () => {
      const [Services, setServices] = useState([]);
    
   useEffect(() => {
   fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
      <div className="mt-3 p-5">
           <h2 className="d-2 fw-bold mb-5">All Service</h2>
            <Row xs={1} md={3} >
                {
                    Services.map(service => <ServiceCard
                        service={service}
                        key={service.id}></ServiceCard>)
                }
            
            </Row>
            </div>
    );
};

export default Service;
