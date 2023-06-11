import React from 'react';
import './Header.css';

import phonoImage from '../assets/header-imgs/download 1.png'


function Header() {
  return (
    <>
      
    <div className="ph-container">

      <div className="main-img">
        <img src={phonoImage} alt="" />
      </div>

    </div>
    </>

  )
}

export default Header;