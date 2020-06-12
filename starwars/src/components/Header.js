import React, {useState} from 'react';
import axios from 'axios';
import Other from './Other';

function axiosCall (cb) {
    axios.get("https://swapi.dev/api/people/")
    .then((response) => {              
        cb(response.data.results)})
    .catch((err) => {console.log('err', err)})
}


export default function Header() {
    const [call, setCall] = useState([])
    if(call.length === 0) {
        axiosCall(setCall)    
    }
    console.log("call",call);

    return (
        <div className="header">         
        {call.map( (obj) => {
          return(
            <div className='info'><h1 className='name'>{obj.name}</h1>
            <h2 className='birth_year'>Birth Year: {obj.birth_year}</h2> 
            <h2 className='gender'>Gender: {obj.gender}</h2>
            <h2 className='homeworld'>Homeword: {obj.homeworld}</h2>
            <button className='moreInfo'>More info </button>
            <div className='films'> Film: {obj.films} </div> 
            <h2 className='species'> Species: {obj.species}</h2>
            <h2 className='starships'>Starships: {obj.tarships}</h2>
            <h2 className='vehicles'>Vehicles: {obj.vehicles}</h2>
          </div>)  })}
        </div>   
    );
}

