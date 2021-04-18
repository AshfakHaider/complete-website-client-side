import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;