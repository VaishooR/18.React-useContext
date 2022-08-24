import * as React from 'react';
import './style.css';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import {useState,createContext} from 'react';

export const AppContext=createContext();

export default function App() {
  const[username,setusername]=useState('Vaishoo');

  return (
    <div>
      <AppContext.Provider value={{username,setusername}}>
      <Router>

        <Link to='/'>Home</Link>&nbsp;&nbsp;
        <Link to='/profile'>Profile</Link>&nbsp;&nbsp;
        <Link to='/contact'>Contact</Link>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' 
                 element={<Profile/>}>
          </Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

      </Router>
      </AppContext.Provider>
      
    </div>
  );
}
