import React, {useState} from 'react';
import axios from 'axios';

function axiosCall (cb) {
    axios.get("https://swapi.dev/api/people/")
    .then((response) => {    
        console.log("Other data", response.data.results)      
        cb(response.data.results)})
    .catch((err) => {console.log('err', err)})
}

export default function Other() {
    const [call, setCall] = useState([])
    if(call.length === 0) {
        axiosCall(setCall)    
    }

    return ( 
        <div className='other'>       
        {call.map( (obj) => {
            return(           
                <div>
                <div className='films'> Film: {obj.films} </div> 
                <h2 className='species'> Species: {obj.species}</h2>
                <h2 className='starships'>Starships: {obj.tarships}</h2>
                <h2 className='vehicles'>Vehicles: {obj.vehicles}</h2>
                </div>        
          )}  
        )} 
        </div>
    );
}