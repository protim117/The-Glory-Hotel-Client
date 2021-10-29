import React from 'react';
import './Facilities.css'

const Facilities = () => {
    return (
        <div className='mt-4 facilities'>
            <h1>Facilities</h1>
            <div className='border-bottom border-5 mb-5 border-dark'></div>
            <div className='container'>
                <div className="row row-cols-lg-2 row-cols-1 g-0">
                    <div className="col text-center facility-content">
                        <h6 className='border-bottom border-1 border-dark w-25' >Fine Food</h6>
                        <h1>Restaurant</h1>
                    </div>
                    <div className="col">
                        <img src="https://i.ibb.co/L1JBHZS/nick-karvounis-Ciqxn7-FE4v-E-unsplash.jpg" className='w-100' alt="" />
                    </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 g-0">
                
                <div className="col">
                    <img src="https://i.ibb.co/Q8f00v2/swimming.jpg" className='w-100' alt="" />
                </div>
                <div className="col  text-center facility-content">
                <h6 className='border-bottom border-1 border-dark w-25' >
                    Big Pool</h6>
                <h1>Swimming Pool</h1>
                </div>
               
                </div>
            </div>

        </div>
    );
};

export default Facilities;