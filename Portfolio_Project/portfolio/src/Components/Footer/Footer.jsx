import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>Let's Connect</h2>
                    <div className="social-icons">
                        <a href="https://github.com/Anchaljais" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/anchal-jaiswal-a7448a271/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://www.instagram.com/anchal18_/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Anchal Jaiswal. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;