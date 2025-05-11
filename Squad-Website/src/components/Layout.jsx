import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
const Layout = () => {
   const [toggleMode, setToggleMode] = useState('Light');

const handleToggle = () => {
  if (toggleMode === 'Light') {
    setToggleMode('dark');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    setToggleMode('Light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

  return (
    <div>
    <Navbar  Mode={toggleMode}  handleToggle={handleToggle}/>
      <main className='mainbody'>
        <Outlet />
      </main>
    <Footer  Mode={toggleMode}/>
    </div>
  )
}

export default Layout