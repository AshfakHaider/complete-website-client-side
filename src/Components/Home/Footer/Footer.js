import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <section className='footer row justify-content-center '>
            <div className="w-75 d-flex justify-content-center">
            <div className="col-md-3 footer-description">
                <img src={logo} alt=""/>
                <p>Lorem ipsum dolor ame consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
                 <p className='text-secondary'>support@google.com</p>
                 <p className='text-secondary'>+821 123 456 88</p>   
            </div>
            <div className="col-md-3 footer-description">
                <h3>Recent News</h3>
                <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
                </ul>
                
            </div>
            <div className="col-md-3 footer-description">
                <h3>Our Address</h3>
                <p>205 Olazu Familia, Herba Street Front USA</p>
                <p>klearinfo@gmail.com</p>
                <p></p>
            </div>
            <div className="col-md-3 footer-description">
                <h3>
                    Connect With Us
                </h3>
                <p>support@gmail.com</p>
            </div>

            </div>
        </section>
    );
};

export default Footer;