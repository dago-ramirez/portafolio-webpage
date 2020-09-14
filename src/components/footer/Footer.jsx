import React from 'react'
import SocialMediaIcons from '../header/SocialMediaIcons'

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-gray-300 p-6 border-t-2 border-teal-900">
            <p className="text-teal-900 font-bold"><span className="hidden sm:inline-block">Medellín | Colombia | </span>© Created by Dago Ramírez</p>            
            <SocialMediaIcons iconStyles="a-link transition duration-500 ease-in-out text-teal-900 hover:bg-teal-500 transform hover:-translate-y-1 hover:scale-110 ..." />
        </div>
    )
}