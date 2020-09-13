import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const iconGH = <FontAwesomeIcon className="fa-2x" icon={faGithubSquare} />;
const iconLK = <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />;
const iconFCC = <FontAwesomeIcon className="fa-2x" icon={faFreeCodeCamp} />;

export default function SocialMediaIcons(props) {
    return (
        <div className="flex">
            <a className={props.iconStyles} href="https://github.com/dago-ramirez" target="_blank" rel="noopener noreferrer">
                {iconGH}
            </a>
            <a className={props.iconStyles} href="https://www.linkedin.com/in/dago-ram%C3%ADrez-serna/" target="_blank" rel="noopener noreferrer">
                {iconLK}
            </a>
            <a className={props.iconStyles} href="https://www.freecodecamp.org/dago_ramirez" target="_blank" rel="noopener noreferrer">
                {iconFCC}
            </a>
        </div>
    )
}
