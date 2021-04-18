import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPhone,faEnvelopeOpen,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import logo1 from '../../../images/logo1.png';
import './TopHeader.css'
import { Link } from 'react-router-dom';


const TopHeader = () => {
    return (
       <div className='container'>
            <div className='row pt-5 top-header'>
            <div className="col-md-4 mt-3">
            <span className='iconSpan'><FontAwesomeIcon icon ={faPhone}></FontAwesomeIcon> +8 012 3456 7899</span>
            <span><FontAwesomeIcon icon ={faEnvelopeOpen} className='icon'></FontAwesomeIcon>support@google.com</span>
            </div>
            <div className="col-md-4 text-center">
                <img src={logo1} alt=""  className='logo'/>
            </div>
            <div className="col-md-4 text-right">
                <Link to ='/login' className='mainBtn'>Login   <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></Link>
            </div>
            
        </div>
       </div>
    );
};

export default TopHeader;