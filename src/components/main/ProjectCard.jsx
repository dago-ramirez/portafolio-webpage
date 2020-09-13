import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-1 mx-4">
            <img className="w-full" src={props.image} alt="Project"/>
            <div className="px-6 py-4 bg-gray-500">
                <div className="font-bold text-xl mb-2 text-center text-gray-900"> 
                    {props.tittle}
                </div>
            </div>                
        </div>
    )
}
