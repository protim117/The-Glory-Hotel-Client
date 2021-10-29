import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.PNG';
import './Foooter.css'

// designing footer 
const Footer = () => {
    return (
        <div className='footer-section'>
        <div className='container'>
            <div className="row row-cols-lg-3 row-cols-1 py-4 ">
                <div className="col">
                   <Link to='/home'> <img src={logo} style={{width:'100px'}} className='py-3' alt="" /></Link>
                </div>
                <div className="col py-3">
                    <h4>Phone Support</h4>
                    <h5>24 HOURS A DAY</h5>
                    <h3>+880123456789</h3>
                </div>
                <div className="col py-3">
                    <h4>Connect With Us</h4>
                    <h5>SOCIAL MEDIA CHANNELS</h5>
                    <div className='social-icon fs-4'> 
                    <i className="fab fa-facebook p-3"></i>
                    <i className="fab fa-twitter p-3"></i>
                    <i className="fab fa-instagram p-3"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;