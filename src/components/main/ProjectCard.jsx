import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="order rounded-lg overflow-hidden mb-1 mx-4">
            <img src={props.data.image} alt="Project"/>
            <div className="px-6 py-4 bg-gray-500 animate-pulse font-bold text-xl mb-2 text-center text-blue-dago">
                {props.data.tittle}
            </div>                
        </div>
    )
}
