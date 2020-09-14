import React, { useState } from 'react';
import SurveyForm from './../../images/SurveyForm.png';
import LandingPage from './../../images/LandingPage.png';
import TributePage from './../../images/TributePage.png';
import TecnicalDocumentation from './../../images/TecnicalDocumentation.png';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const iconPrev = <FontAwesomeIcon className="fa-2x" icon={ faChevronCircleLeft } />
const iconNext = <FontAwesomeIcon className="fa-2x" icon={ faChevronCircleRight } />

const cardData = [
    { image: SurveyForm, tittle: "Survey Form", endPoint: 'https://dago-ramirez.github.io/Survey-Form/' },
    { image: LandingPage, tittle: "Landing Page", endPoint: 'https://dago-ramirez.github.io/Landing-Page/' },
    { image: TributePage, tittle: "Tribute Page", endPoint: 'https://dago-ramirez.github.io/Tribute_Page/' },
    { image: TecnicalDocumentation, tittle: "Tecnical Documentation", endPoint: 'https://dago-ramirez.github.io/Tecnical_Documentation_Page/' }
];

export default function Projects() {
    const [count, setCount] = useState(0);
    const card = cardData.map((data, i) => {
        return <a href={data.endPoint} target="_blank" rel="noopener noreferrer" key={i}><ProjectCard data={data} /></a>;
    });    

    function handlePrevButton() {
        setCount(prevCount => prevCount - 1 < 0 ? 3 : prevCount - 1);
    }

    function handleNextButton() {
        setCount(prevCount =>  prevCount + 1 > 3 ? 0 : prevCount + 1);
    }

    function handleOnClick(e) {
        setCount(parseInt(e.target.value));
    }
    
    return (
        <>
            <div className="flex flex-col items-center">
                <h6 className="text-2xl sm:text-4xl text-teal-900 font-bold text-center">These are some of my projects</h6>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-start-5 md:col-span-4">
                        {card[count]}
                    </div>
                </div>
                <div className="py-2">
                    <nav className="block">
                        <ul className="flex pl-0 list-none flex-wrap">
                            <li>
                                <button  onClick={ handlePrevButton } className="project-btn">
                                    {iconPrev}
                                </button>
                            </li>
                            <li>
                                <button  onClick={ handleOnClick } className="project-btn" value="0">
                                    1
                                </button>
                            </li>
                            <li>
                                <button  onClick={ handleOnClick } className="project-btn" value="1">
                                    2
                                </button>
                            </li>
                            <li>
                                <button  onClick={ handleOnClick } className="project-btn" value="2">
                                    3
                                </button>
                            </li>
                            <li>
                                <button  onClick={ handleOnClick } className="project-btn" value="3">
                                    4
                                </button>
                            </li>
                            <li>
                                <button  onClick={ handleNextButton } className="project-btn">
                                    {iconNext}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}