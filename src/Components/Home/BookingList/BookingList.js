import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Order from './Order';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `http://localhost:5000/booking?email=`+loggedInUser.email;
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])
    console.log('Bookings', bookings)
    return (
        <div className="row">
            <div className="col-md-3">
                
            </div>
            <div className="col-md-6 p-4 pr-5">
                <h1 className="d-flex justify-content-center ms-5 ps-5 mb-4">Your bookings</h1>
                {
                    bookings.length === 0 && <div className="d-flex justify-content-center pt-5 mt-5 ms-5 ps-5">
                        <div class="text-primary spinner" style={{width: '10rem', height: '10rem'}} role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                    </div>
                }
                {
                    bookings.map(booking => <Order booking={booking}></Order>)
                    
                }   
            </div>
        </div>
    );
};

export default BookingList;

