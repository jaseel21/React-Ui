import React from 'react'
import {SearchBar} from '../SearchBar'
import { SearchResultsList } from '../SearchResultsList';
import { useState } from "react";
import './Hero.css'

function Hero() {
    const [results, setResults] = useState([]);
  return (
    <div>
    <div className='home-left'>
        <div className="App">
            {/* <div className="imgContainer">
                <img src="https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1.png" alt="" />
            </div> */}
            <div className='art'>
                <div className='labelOfSearch'>
                    
                </div>
                <h1 className='sh4'>Search Students<br /><span>NAME</span><br />here</h1>
                <div className='imgOfSearch'>
                <img src="https://i.postimg.cc/tgVy2fFG/arrow-png-01.png" alt="dKq5Q.png" border="0" />
                </div>
            </div>
            <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
        </div>
    </div>
        <div className='home-right'>
            <div className="HeadLine">
                <h1>ADSA<br />Diploma</h1>
            </div>
            <div className='Description'>
                <p><span>Alathurpadi Dars</span> is held at Alathurpadi Juma Masjid, a historical Masjid situated in Alathurpadi town, has a history of more than 100 years.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero