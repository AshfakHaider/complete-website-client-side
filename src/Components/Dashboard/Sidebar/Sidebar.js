import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    let makeAdmin;
    let role = 'user';
    if(admin.length > 0){
        makeAdmin = admin.find(make => make.email === loggedInUser.email);
        if(makeAdmin){
            role = 'admin';
        }

    } 
    console.log(role);

    return (
        <div className="sidebar-container sidebar">
            <h3 className="text-white ms-5">Dashboard</h3>
                <div className="ms-5 mt-5 pt-5">
                    {
                        role === 'admin' ? 
                        <div>
                        <p className='active'><Link to="/home">Home</Link></p>
                        <br/>
                       <p><Link to="/bookings/id">Book</Link></p>
                        <br/>
                        <p><Link to="/bookingList">Booking List</Link></p>
                        <br/>
                        <p><Link to="/addService">Add Service</Link></p>
                        <br/>
                        <p><Link to="/addReview">Add Review</Link></p>
                        <br/>
                        <p><Link to='/allServices'>All Service</Link></p>
                        <br/>
                        <p><Link to='/addAdmin'>Add Admin</Link></p>

                        </div>:<div>
                        <p className='active'><Link to="/home">Home</Link></p>
                        <br/>
                       <p><Link to="/bookings/id">Book</Link></p>
                        <br/>
                        <p><Link to="/bookingList">Booking List</Link></p>
                        <br/>
                        <p><Link to="/addReview">Add Review</Link></p>
                        </div>

                    }


                </div>
        </div>
    );
};

export default Sidebar;
