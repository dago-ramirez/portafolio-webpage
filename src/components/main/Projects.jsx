import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects(props) {
    const card = props.images.map(image => {
        return <ProjectCard image={image.image} tittle={image.tittle} key={image.image.toString()}/>;
    })
    return (
        <>
            <h1 className="text-2xl sm:text-6xl text-gray-800 font-bold text-center">These are some of my projects</h1>
            <div className="flex flex-col md:flex-row justify-between">
                {card}
            </div>
        </>
    )
}
