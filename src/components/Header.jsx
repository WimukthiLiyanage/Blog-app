import React from 'react'
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"


function Header() {
  return (
    <nav>
      <div className='container nav_container'>
        <Link>
        <img src="" alt="Navbara Logo" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to="/profile">Ernest Achiever</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
       </ul>
       <button className='nav_toggle-btn'>
        <AiOutlineClose/>
       </button>
      </div>
    </nav>
  )
}

export default Header