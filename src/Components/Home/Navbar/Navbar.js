import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
       <section className='mt-4 '>
           <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" href="#"><h6>Home</h6></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><h6>About</h6></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><h6>Services</h6></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><h6>Projects</h6></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><h6>Shop</h6></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><h6>Contact Us</h6></a>
                    </li>
                   
                </ul>
                </div>
              </div>
           </nav>
       </section>
    );
};

export default Navbar;