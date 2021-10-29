import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.css'
const Plan = ({plan}) => {
    // single plan card 
    const{img,title,description,_id}=plan;
    return (
        <div className='plan-card-section'>
            <div className="col h-100 plan-card">
                <div className="card h-100">
                <img src={img} className="card-img-top h-100 w-100" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0,125)}</p>
                    <Link to={`/plan/${_id}`}>
                        <button className='btn bg-success text-white'>Book Now</button>
                    </Link>
                </div>
                </div>
  </div>
        </div>
    );
};

export default Plan;