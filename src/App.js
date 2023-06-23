import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import {Routes,Route} from 'react-router-dom'
import ProfileCard from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/search' Component={SearchBar}/>
      <Route path='/profile' Component={ProfileCard} />
    </Routes>
    </div>
  );
}

export default App;
