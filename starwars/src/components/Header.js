import React from 'react';
import axios from 'axios';


export default function Header() {


    return (
        
    <div className="header">
        <img></img>
        <div className='info'>
            <h1 className='name'>data.name</h1>
            <h2 className='birth_year'>data[birth_year]</h2> 
            <h2 className='gender'>..</h2>
            <h2 className='homeworld'>..</h2>
            <button className='moreInfo'>More info</button>
        </div>
    </div>
    );
}

