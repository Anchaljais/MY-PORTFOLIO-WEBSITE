import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0c9a2ac5-f01e-4c5d-b5ae-5b91a73c0407"); // Replace with your Web3Forms access key

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert("Message sent successfully!"); // Notify the user
            event.target.reset(); // Clear the form
        } else {
            alert("Failed to send the message. Please try again."); // Notify the user
        }
    };

    return (
        <div className='contact' id="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-sections">
                <div className="contact-left">
                    <h2>Let's Connect!</h2>
                    <p>
                        For job opportunities, internships, or any inquiries, feel free to reach out! I’m eager to learn, grow, and contribute to exciting projects. Looking forward to connecting!
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <MdEmail className="contact-icon" />
                            <p>theanchaljaiswal@gmail.com</p> {/* Replace with your email */}
                        </div>
                        <div className="contact-item">
                            <FaPhoneAlt className="contact-icon" />
                            <p>+7982262871</p> {/* Replace with your phone number */}
                        </div>
                        <div className="contact-item">
                            <FaLocationDot className="contact-icon" />
                            <p>Greater Noida, India</p> {/* Replace with your location */}
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;