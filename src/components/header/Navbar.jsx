import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navlogo'>
        <img
          src='../../../public/durban workplace.jpg'
          alt='durban-logo'
          className='logo'
        />
        <h2>Durban WorkPlace</h2>
      </div>
      <div className='navlinks'>
        <a href='#' className='navlinksitem'>
          Login
        </a>
        <a href='#' className='navlinksitem'>
          Get Started
        </a>
        <a href='#' className='navlinksitem'>
          Support
        </a>
      </div>
    </div>
  );
}

export default Navbar;
