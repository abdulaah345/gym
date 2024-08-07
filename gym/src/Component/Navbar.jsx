import React from 'react'
import logo from './../assets/Group.png'
import logo1 from './../assets/Group 21.png'
import './../Component/navbar.css'
const Navbar = () => {
  return (
   <>
      <div className='container2'>
        <div className='image'>
        <img src={logo}/>
        </div>
        <div className='cont1'>
          <ul>
            <li>
            <a href='#'>تواصل</a>
            </li>
            <li>
              <a href='#'>البرامج</a>
            </li>
            <li>
            <a href='#'>الرئيسية</a>
              
            </li>
          </ul>
    
        </div>
        <div className='cont2i'> 
        <img src={logo1}/>
        </div>

      </div>
  
    
   </>
  )
}

export default Navbar
