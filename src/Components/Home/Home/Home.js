import React from 'react';
import Facilities from '../../Facilities/Facilities';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Plans from '../Plans/Plans';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* assembling every components */}
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Plans></Plans>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;