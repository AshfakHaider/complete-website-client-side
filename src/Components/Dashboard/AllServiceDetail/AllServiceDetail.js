import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllServiceDetail = ({service}) => {
    return (
        <div className=' d-flex justify-content-center w-7' >
         
          <div className="text-left mt-3 mb-3 ml-5">
              <h3>Service Name:{service.name}</h3>
              <p>Detail:{service.detail}</p>
              <button className='delete btn btn-danger'>Delete</button>
          </div>
          
         
        </div>
    );
};

export default AllServiceDetail;