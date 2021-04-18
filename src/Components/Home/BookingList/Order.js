import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './Order.css'


const Order = ({booking}) => {
    console.log(booking);
    return (
        <div className='w-100'>

            <div className="ms-5">
            <table className="table table-borderless">
            <thead className="table-color">
                <tr>
                <th className="text-info" scope="col">Details</th>
                <th className="text-info" scope="col">Booking Date</th>
                <th className="text-info" scope="col">Booking</th>
                <th className="text-info" scope="col">Email</th>
                
                </tr>
            </thead>
            <tbody>
               
                    <tr>
                        <td>{booking.detail}</td>
                        <td>{booking.bookingDate}</td>
                        <td>{booking.service}</td>
                        <td>{booking.email}</td>
                    </tr>
                    
                
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default Order;
