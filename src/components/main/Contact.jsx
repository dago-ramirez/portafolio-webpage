import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconWA = <FontAwesomeIcon icon={faWhatsappSquare} />;
const iconMobile = <FontAwesomeIcon icon={faMobileAlt} />;
const iconMail = <FontAwesomeIcon icon={faEnvelope} />;

export default function Contact() {
    return (
        <div className="my-auto">
            <h1 className="text-3xl sm:text-6xl text-teal-900 font-bold text-center underline mb-10">Contact me on</h1>
            {/* <p className="contact-section">{iconMobile} 310 425 7196</p> */}
            <p className="contact-section">{iconMobile} {iconWA} (57) 310 425 7196</p>
            <p className="contact-section">{iconMail} dagoramirezserna@gmail.com</p>
        </div>
    )
}
