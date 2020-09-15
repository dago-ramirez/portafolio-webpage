import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faJava } from '@fortawesome/free-brands-svg-icons';

const iconHTML = <FontAwesomeIcon className="dev-icons" icon={faHtml5} />;
const iconCSS = <FontAwesomeIcon className="dev-icons" icon={faCss3} />;
const iconFJS = <FontAwesomeIcon className="dev-icons" icon={faJs} />;
const iconBS = <FontAwesomeIcon className="dev-icons" icon={faBootstrap} />;
const iconReact = <FontAwesomeIcon className="dev-icons" icon={faReact} />;
const iconJava = <FontAwesomeIcon className="dev-icons" icon={faJava} />;

export default function Welcome() {
    return (
        <div className="my-auto">
            <h1 className="text-3xl sm:text-6xl text-teal-900 font-bold text-center">¡Hi, I'm Dago Ramírez!</h1>
            <h3 className="text-xl sm:text-4xl text-teal-900 font-bold text-center mt-5 sm:mt-10">I'm an electronic engineer and a web developer</h3>
            <div className="mt-8 sm:mt-16">
                <p className="text-center">{iconHTML}{iconCSS}{iconFJS}{iconBS}{iconReact}{iconJava}</p>
            </div>
        </div>
    )
}
