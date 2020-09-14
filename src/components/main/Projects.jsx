import React from 'react';
import SurveyForm from './../../images/SurveyForm.png';
import LandingPage from './../../images/LandingPage.png';
import TributePage from './../../images/TributePage.png';
import TecnicalDocumentation from './../../images/TecnicalDocumentation.png';

import ProjectCard from './ProjectCard';

const cardData = [
    { image: SurveyForm, tittle: "Survey Form", endPoint: 'https://dago-ramirez.github.io/Survey-Form/' },
    { image: LandingPage, tittle: "Landing Page", endPoint: 'https://dago-ramirez.github.io/Landing-Page/' },
    { image: TributePage, tittle: "Tribute Page", endPoint: 'https://dago-ramirez.github.io/Tribute_Page/' },
    { image: TecnicalDocumentation, tittle: "Tecnical Documentation", endPoint: 'https://dago-ramirez.github.io/Tecnical_Documentation_Page/' }
  ];

export default function Projects() {
    const card = cardData.map(data => {
        return <a href={data.endPoint} target="_blank" rel="noopener noreferrer" key={data.tittle}><ProjectCard data={data} /></a>;
    })
    return (
        <>
            <h6 className="text-2xl sm:text-4xl text-gray-800 font-bold text-center">These are some of my projects</h6>
            <div className="grid grid-cols-10 gap-4">
                <div className="col-start-2 col-span-8 md:col-start-4 md:col-span-4">
                    {card}
                </div>
            </div>
        </>
    )
}