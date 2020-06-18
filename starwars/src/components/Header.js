import React, {useState} from 'react';
import axios from 'axios';
import Starship from './Starship';


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

    const mStyle = (color) => {
        return {
            header: {
                display: `flex`,
                "align-items" : `center`, 
                "flex-direction" : `column`,              
            },
            info: {
                border: `2px solid black`,
                "border-radius": `35px`,
                width: `80%`,
                margin: `1%`,
            },
            div: {               
                color,
            },            
        }
    }


    return (
        <div className="header" style={mStyle().header}>         
        {call.map( (obj) => {
          return(
            <div className='info' style={mStyle().info}>
            <h1 className='name' style={{color:`red`}}>{obj.name}</h1>
            <h2 className='birth_year'><span style={mStyle(`blue`).div}>Birth Year:</span> {obj.birth_year}</h2> 
            <h2 className='gender'><span style={mStyle(`blue`).div}>Gender:</span>  {obj.gender}</h2>
            <h2 className='homeworld'><span style={mStyle(`blue`).div}>Homeword:</span>  {obj.homeworld}</h2>
            {/* <button className='moreInfo'>More info </button> */}
            <div className='films'> Film: <span style={mStyle(`orange`).div}>{obj.films}</span> </div> 
            <h2 className='species'> Species: {obj.species}</h2>
            <Starship>Starships: {obj.starships[0]} </Starship>
            <h2 className='vehicles'>Vehicles: {obj.vehicles}</h2>
          </div>)  })}
        </div>   
    );
}

