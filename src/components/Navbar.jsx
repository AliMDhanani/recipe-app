import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="navbar container">
        <a href="/" className='logo'>F<span>oo</span>dHeaven</a>
        <div className="nav__links">
            <a href="/">Home</a>
            <a href="/">Recipes</a>
            <a href="/">Settings</a>
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar__btn active" :"sidebar__btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
  )
}

export default Navbar