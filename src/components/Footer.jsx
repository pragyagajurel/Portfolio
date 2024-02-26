import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="text-center" style={{ backgroundColor: '#ffff', color: '#fe70bd', padding: '20px 0', borderTop: '1px solid #fff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-4 mb-md-0">
                            <p style={{ fontSize: '14px', margin: 50 }}>&copy; {new Date().getFullYear()} Pragya Gajurel | All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <Link to="/contact"><h5 style={{ fontSize: '14px' }}>Contact Me</h5></Link>
                            <p style={{ fontSize: '14px' }}> <FaMapMarkerAlt /> Kathmandu, Nepal</p>
                            <p style={{ fontSize: '14px' }}> <FaEnvelope /> Email: gajurelpragya@gmail.com</p>
                            <p style={{ fontSize: '14px' }}> <FaPhone /> Phone: +977-985-1335382</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
