import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div>
        <div className='container main-body col-md-12 search-div'>
          <div className='img-container'>
            <img className='img' src="https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1.png" alt="Logo"/>
          </div>
          <div className='search-bar col-xs-6 col-md-6'>
            <input type="text" placeholder="Search" aria-label="Search"/>
            <button type="submit">
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default SearchBar