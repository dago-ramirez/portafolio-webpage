import React from 'react';
import { handleOnClick } from './MenuButton';

export default function SectionsLinks(props) {
    const links = props.links.map((link, i) => {
        return <div onClick={ handleOnClick } className="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-2" key={i}>{link.link}</div>
    });

    return (
        <div className="text-sm md:flex-grow mb-2 md:mb-0">
            {links}
        </div>
    )
}
