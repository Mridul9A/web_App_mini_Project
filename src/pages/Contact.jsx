import React, { useState } from 'react';
import '../styles/pagesCss/contact.css'; 


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            
            <p className="company-info">
                We value your feedback and inquiries! Whether you have a question, need support, or simply want to get in touch, 
                we are here to help. Reach out to us using the contact form below, and our team will respond promptly.
            </p>

            <h2 className="details-heading">Our Contact Details</h2>
            <p className="details-info">
                You can also reach us through the following methods:
            </p>
            <ul className="contact-details-list">
                <li><strong>Email:</strong> support@yourcompany.com</li>
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <li><strong>Address:</strong> 1234 Street Name, City, Country</li>
                <li><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</li>
            </ul>

            <h2 className="form-heading">Get in Touch via Form</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;


