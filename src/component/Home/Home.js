import React from 'react';
import Services from '../Service/Services';
import AboutUs from './AboutUs/AboutUs';
import Bannar from './Bannar/Bannar';
import './Home.css';

const Home = () => {
    return (
        <div className="body">
            <div className="h-75">
                <Bannar></Bannar>
                <div className="mt-5 mb-5">
                    <AboutUs></AboutUs>
                </div>
                <div>
                   <Services></Services>
                </div>
         </div>
            
        </div>
    );
};

export default Home;