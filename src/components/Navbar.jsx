import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar container">
        <a href="/" className='logo'>F<span>oo</span>dHeaven</a>
        <div className="nav__links">
            <a href="/">Home</a>
            <a href="/">Recipes</a>
            <a href="/">Settings</a>
        </div>
    </div>
  )
}

export default Navbar