import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">EveCafe</h5>
            <p>"Your Everyday Escape in Bengaluru."</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><Link to="/about" className="text-white">About Us</Link></p>
            <p><Link to="/menu" className="text-white">Menu</Link></p>
            <p><Link to="/reservations" className="text-white">Reservations</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home me-3"></i>123, MG Road, Bengaluru, IN</p>
            <p><i className="fas fa-envelope me-3"></i>info@evecafe.com</p>
            <p><i className="fas fa-phone me-3"></i>+91 98765 43210</p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p> © 2024 Copyright: 
              <a href="#" className="text-white" style={{textDecoration: 'none'}}>EveCafe.com</a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <a href="https://www.facebook.com" className="btn-floating btn-sm text-white" style={{fontSize: '23px'}}><FaFacebookF /></a>
              <a href="https://www.instagram.com" className="btn-floating btn-sm text-white" style={{fontSize: '23px', marginLeft: '10px'}}><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
