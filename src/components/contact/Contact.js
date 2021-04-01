import "./contact.css";
import ContactImage from "../../assets/Contact.svg";
import { useState } from "react";
const Contact = () => {
  return (
    <div className="skills-container" id="Contact">
      <div className="about-title">
        Contact
        <div className="about-title-border"></div>
      </div>
      <div className="skills-subcontainer">
        <img src={ContactImage} className="skills-img" />
        <div className="firstCircle"></div>

        <div className="contact-info">
          <div className="skills-info-title">Contact details</div>
          <div className="skills-info-subtitle">Email</div>
          <div className="skills-info-details">ishaiyaish@gmail.com</div>
          <div className="skills-info-subtitle">Phone</div>
          <div className="skills-info-details">+972505202921</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
