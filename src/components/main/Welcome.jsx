import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faJava } from '@fortawesome/free-brands-svg-icons';

const iconHTML = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faHtml5} />;
const iconCSS = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faCss3} />;
const iconFJS = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faJs} />;
const iconBS = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faBootstrap} />
const iconReact = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faReact} />
const iconJava = <FontAwesomeIcon className="text-4xl sm:text-6xl text-gray-800 mx-2 md:mx-5 animate-pulse" icon={faJava} />

export default function Welcome() {
    return (
        <div className="mt-8 sm:mt-10 mb-16">
            <h1 className="text-3xl sm:text-6xl text-gray-800 font-bold text-center">¡Hi, I'm Dago Ramírez!</h1>
            <h3 className="text-xl sm:text-4xl text-gray-800 font-bold text-center mt-5 sm:mt-10">I'm an electronic engineer and a web developer</h3>
            <div className="mt-8 sm:mt-16">
                <p className="text-center">{iconHTML}{iconCSS}{iconFJS}{iconBS}{iconReact}{iconJava}</p>
            </div>
        </div>
    )
}
