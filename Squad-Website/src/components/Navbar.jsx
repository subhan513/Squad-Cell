import React from 'react';
import BreadCrumbs from './BreadCrumbs';
const Navbar = ({ handleToggle, Mode }) => {
  return (
    <div className='parent'>
      <div>
        <h1>SQUAD CELL</h1>
      </div>
      <BreadCrumbs/>
      <div className='btn'>
        <button onClick={handleToggle}>
          Enable {Mode === 'Light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
