import React from 'react';
import './TestimonialDetail.css'
const TestimonialDetail = ({testimonial}) => {
    return (
        <div className='testimonialDetail col-md-3 text-center'>
        <div className='detail'>
            <p>{testimonial.review}</p>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.location}</p>
            <img src={testimonial.imageURL} alt=""/>
         </div>            
        </div>
    );
};

export default TestimonialDetail;