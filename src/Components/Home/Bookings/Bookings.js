import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import PaymentProcess from '../../Dashboard/PaymentProcess/PaymentProcess';


const Bookings = () => {
    const {id} = useParams();
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [services,setServices] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data  => {
            console.log(data[0]);
            setServices(data[0]);
        })
    },[])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingData = {
            service: services.name,
            email: data.email,
            bookingDate: data.bookingDate,
            detail: data.detail,
            category: data.category
        };
        const url = `http://localhost:5000/addBookings`;

        console.log(bookingData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => console.log('server res', res))
        alert('Details Submitted, Please Payment Below')
    };
    
    
    return (
       <div className="row">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 mt-5 text-center">
                <h1>Welcome <span>{loggedInUser.name}</span> </h1>
                <br/>
                <h3>Your Booking is <span>{services.name}</span> </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='form-control' defaultValue="" {...register("email")} placeholder='Enter Your Email' /> <br/>
                <input className='form-control' defaultValue="booking date" {...register("bookingDate")} type='date'  /> <br/>
                <input className='form-control' defaultValue="booking" {...register("category")} /> <br/>
                
                <input className='form-control' {...register("detail", { required: true })} placeholder='Enter details'/>
                <br/>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input className='btn btn-primary' type="submit"  />
                </form>
                <PaymentProcess></PaymentProcess>
            </div>
           
            
        </div>

    );
};

export default Bookings;