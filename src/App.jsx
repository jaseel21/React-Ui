import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Routes,Route,} from 'react-router-dom'
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Form from './Components/Form/Form';
import login from './Components/Login/login';
import Hero from './Components/Hero/Hero';


function App() {
  return (
    <div>
    <NavBar/>
    <Routes>

      <Route path='/' Component={Hero}/>
      <Route path='/login' Component={login}/>
      <Route path='/form' Component={Form}/>
      <Route path='/profile' Component={ProfileCard} />
    </Routes>
    
    </div>
  );
}

export default App;
