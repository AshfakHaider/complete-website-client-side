import React from 'react';
import { Link } from 'react-router-dom';
import './Appointment.css'

const Appointment = () => {
    return (
        <section className='appointment text-white text-center d-flex justify-content-center'>
            <div className='w-75  justify-content-center'>
                <h1>Make Appointment Today</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris</p>
                <div className='d-flex booking justify-content-center align-items-center'>
                    <div className='col-md-6'> 
                    <p>Emergency</p>
                    <h5>+885524522242</h5>
                    </div>
                    <h3>Or</h3>
                    <div className='col-md-6'>
                      <Link to ='/bookings/id' className='bookingBtn btn'>Book Your Plan</Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Appointment;