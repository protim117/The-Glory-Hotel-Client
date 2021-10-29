import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    // About section 
    return (
        <div className="about-us">
        <div className='container  '>
            <div className="row row-cols-lg-2 row-cols-1 gx-4 py-4">
            <div className="about-us-content col">
                <h6>The Glory Hotel</h6>
                <h1>Relax in our Resort</h1>
                <p>When you wake up at The Glory Hotel, open the curtains and take a look outside at the vast garden bathed in the morning sunlight, or the skyline spread out before you. Indulge yourself with breakfast in your room, an excellent  way to start your day no matter what the season.</p>
            </div>
            <div className="about-us-img col">
            <img src="https://i.ibb.co/25g9510/manuel-moreno-DGa0-LQ0y-DPc-unsplash-1.jpg" className="w-100 pt-4" alt="" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;