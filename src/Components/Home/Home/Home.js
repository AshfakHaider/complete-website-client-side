import React from 'react';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <About></About>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;