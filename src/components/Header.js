import React from 'react'
import {FaReact} from 'react-icons/fa';

function Header() {
    return (
        <>
          <div className="header-section d-flex align-items-center justify-content-center">
              <FaReact className="react-icon"/>
            <h1 className="primary-black">React Contact Book</h1>
          </div>
        </>
    )
}

export default Header;
