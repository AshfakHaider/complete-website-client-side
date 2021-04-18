import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({services}) => {
    return (
        <div className='serviceDetail col-md-4 text-center card'>
        <div className = 'front'>
            <img src={services.imageURL} alt=""/>
            <h4>{services.name}</h4>
            <Link to ={`/bookings/${services._id}`}  className='btn getStartedBtn'>Book Now</Link>
         </div>
         <div className='back'>
             <h4>{services.name}</h4>
              <p>{services.detail}</p>
         </div>
        </div>
    );
};

export default ServiceDetail;