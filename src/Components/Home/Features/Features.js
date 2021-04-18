import React from 'react';
import feature1 from '../../../images/features01.jpg';
import feature2 from '../../../images/features02.jpg';
import feature3 from '../../../images/features03.jpg';
import { faStar,faTrophy,faUserCheck } from '@fortawesome/free-solid-svg-icons'
import FeatureDetails from '../FeatureDetails/FeatureDetails';

const features = [
    {
        img:feature1,
        description:'Supar Quality Well Result',
        icon:faStar
    },
    {
        img:feature2,
        description:'Professional And Trusted Staff',
        icon:faUserCheck
    },
    {
        img:feature3,
        description:'Commited To Success',
        icon:faTrophy
    }
]
const Features = () => {
    return (
        <section className='d-flex justify-content-center mt-5 mb-5'>
            <div className='w-75 row'>
                {
                    features.map(feature => <FeatureDetails feature ={feature}></FeatureDetails>)
                }
            </div>
        </section>
    
    );
};

export default Features;