import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelope, BsInstagram } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>Please feel free to reach out to me for any inquiries or opportunities.</p>
      <ul className="contact-icons">
        <li><a href="mailto:idowu.subomi9@gmail.com"><BsEnvelope /></a></li>
        <li><a href='https://github.com/davididowu2001' target='_blank' rel='noopener noreferrer'><BsGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/davididowu" target='_blank' rel='noopener noreferrer'><BsLinkedin /></a></li>
        <li><a href="https://www.instagram.com/david_idowuu" target='_blank' rel='noopener noreferrer'><BsInstagram /></a></li>
      </ul>
    </div>
  );
}

export default Contact;
