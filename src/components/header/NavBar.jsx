import React from 'react';
import MenuButton from './MenuButton';
import SectionsLinks from './SectionsLinks';
import SocialMediaIcons from './SocialMediaIcons'

export default function NavBar(props) {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Dago Ramírez</span>
            </div>
            <MenuButton />
            <div className="links-navbar w-full hidden md:flex flex-grow md:items-center md:w-auto">
                <SectionsLinks links={props.links} />
                <SocialMediaIcons iconStyles="a-link text-teal-200 transition duration-500 ease-in-out hover:bg-teal-700 transform hover:-translate-y-1 hover:scale-110 ..."/>
            </div>
        </nav>
    )
}

