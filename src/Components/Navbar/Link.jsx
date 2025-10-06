import React from 'react';

const Link = ( {route} ) => {
    return (
        <li className='py-1 px-5 hover:bg-gray-300 pr-8 rounded-2xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;