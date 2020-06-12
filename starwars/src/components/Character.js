// Write your Character component here
import React from 'react';
import axios from 'axios';
import Header from './Header'
import Other from './Other'


export default function Character() {


    return (
        <div className="character">
          <Header />
          <Other />          
        </div>
      );
}