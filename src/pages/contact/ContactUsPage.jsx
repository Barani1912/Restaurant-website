import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; 
import './ContactUs.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1 style={{ textAlign: "center"}}>Contact</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Contact Us</h3>
          <FaPhoneAlt className="contact-icon" />
          <p>Phone:+91 6379150363</p>
          <p>Email: forkandflame@gmail.com</p>
        </div>

   
        <div className="contact-card">
          <h3>Get Directions</h3>
          <FaMapMarkerAlt className="contact-icon" />
          <p>24/2,Crazy Boy Road, Block 7, Karaikal, Pondicherry. </p>
        </div>


        <div className="contact-card">
          <h3>Opening Hours</h3>
          <FaClock className="contact-icon" />
          <p>Monday - Friday: 9 AM - 6 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="contact">
        <form className="contact-form">
          <h3>Ask a question</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d125357.63074804087!2d79.69540289811569!3d10.931161092631205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1727539119594!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
