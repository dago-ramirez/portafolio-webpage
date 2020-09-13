import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const iconWA = <FontAwesomeIcon className="fa-2x" icon={faWhatsapp} />
const iconMail = <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />

export default function ContactIcons() {
    return (
        <>
            <button className="btn-blue">
                {iconWA}
            </button>
            <button className="btn-blue">
                {iconMail}
            </button>
        </>
    )
}
