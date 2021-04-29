import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import ceo from '../../../images/ceo.png';
import client from '../../../images/client.png'
const Testimonial = () => {
    const [testimonial,setTestimonial] = useState([]);
    useEffect(()=>{
        fetch('https://sleepy-headland-68980.herokuapp.com/review')
        .then(res=> res.json())
        .then(data =>{
            setTestimonial(data);
        })
    },[])
    return (
        <div>
        <section className='d-flex justify-content-center mt-5 mb-5'>
        <div className='row w-75 services text-center m-4 '>
          <div className='service-title'>
           <h5>Testimonial</h5>
            <h1>Let's See What Our Client Says About Us</h1>
          </div>
            {
                testimonial.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
            }
          
        </div>
        </section>   
        </div>
    );
};

export default Testimonial;