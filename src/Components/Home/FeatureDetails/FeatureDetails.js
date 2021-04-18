import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FeatureDetails.css'

const FeatureDetails = ({feature}) => {
    return (
        <div className='col-md-4 d-flex justify-content-ceter features'>
             <div className ='feature'>
                 <img src={feature.img} className='img-fluid' alt=""/>
                 <div className="d-flex top-position">
                        <FontAwesomeIcon icon = {feature.icon} className='feature-icon ml-3'></FontAwesomeIcon>
                        <h4>{feature.description}</h4>
                 
                 </div>
            </div>   
        </div>
    );
};

export default FeatureDetails;