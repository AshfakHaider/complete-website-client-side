import React, { useEffect, useState } from 'react';
import car from '../../../images/car.png'
import plumbing from '../../../images/plumbing.png'
import home from '../../../images/home.png'
import window from '../../../images/window.png'
import carpet from '../../../images/carpet.png'
import office from '../../../images/office.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => {
            setServices(data);
        })
    },[]) 
    return (
        <section className='d-flex justify-content-center mt-5 mb-5'>
        <div className='row w-75 services text-center'>
          <div className='service-title'>
          <h5>Our Services</h5>
            <h1>We Provide Many Services For Your Regular Life</h1>
          </div>
            
           
           {
               services.map(services => <ServiceDetail services={services}></ServiceDetail>)
           }
        </div>
        </section>
    );
};

export default Services;