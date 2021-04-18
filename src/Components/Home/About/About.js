import React from 'react';
import about  from '../../../images/about.png';
import './About.css';

const About = () => {
    return (
        <section className='row about d-flex justify-content-center w-100'>
            <div className="col-md-6 ">
                <h5>About Us</h5>
                <h1>Modern Maintenance <br/> Inc. Has Been Delivering <br/> Results For 40 Years</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. eaque ipsa quae abLorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                <button className='learnAbout'>Learn More</button>
            </div>
            <div className="col-md-4">
                <img src={about} alt="" />
            </div>
        </section>
    );
};

export default About;