import React from "react";
import "./Footer.css"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-content" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px' }} >

                <div className="social-links" style={{ marginLeft: '-100px' }}>
                    <a href="#" className="twitter"><FaTwitter /></a>
                    <a href="#" className="facebook"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/naveen_02_06" className="instagram"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/Naveen-Kumar-Lotti" className="linkedin"><FaLinkedinIn /></a>
                    <a href="https://wa.me/8309423427" className="whatsapp"><FaWhatsapp /></a>
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="https://mail.google.com/mail/?view=cm&to=naveenlotti02@gmail.com" >contact</a>
                </div>
                <div className="copyright">
                    <p style={{ textAlign: 'center', fontSize: '20px' }}>© 2025 Naveen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;