import React from 'react'

export default function MenuButton() {
    function handleOnClick() {        
        const linksNavBar = document.querySelector('.links-navbar').classList;
        linksNavBar.contains('hidden') ? linksNavBar.remove('hidden') : linksNavBar.add('hidden');     
    }

    return (
        <div className="block lg:hidden md:hidden">
            <button onClick={handleOnClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
    )
}