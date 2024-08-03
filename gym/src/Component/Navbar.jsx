import React from 'react'
import logo from './../assets/Group.png'
import './../Component/navbar.css'
const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
  
  
      <ul className="navbarss mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <img src={logo}/>
    </div>
  
</nav>
   </>
  )
}

export default Navbar
