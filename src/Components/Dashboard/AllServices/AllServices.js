import React, { useEffect, useState } from 'react';
import AllServiceDetail from '../AllServiceDetail/AllServiceDetail';
import Sidebar from '../Sidebar/Sidebar';

const AllServices = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => {
            setServices(data);
        })
    },[]) 
    return (
        <div>
            
        <Sidebar></Sidebar>
        
          <div className="">
          {
                services.map(service =><AllServiceDetail service={service}></AllServiceDetail>)
            }
          </div>
        </div>
    );
};

export default AllServices;