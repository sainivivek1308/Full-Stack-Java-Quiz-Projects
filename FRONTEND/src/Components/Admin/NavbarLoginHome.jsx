import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
import './LoginHome.css'
const NavbarLoginHome = () => {
    const navigate=useNavigate();
  return (
    <Navbar
        
        
        rounded
        
        style={{fontSize:"20px"}}
       >
        <Navbar.Brand >
        <span className="self-center whitespace-nowrap  text-3xl   spanclass font-bold  dark:text-white text-blue-600">
          Quiz Admin Application
        </span>
      </Navbar.Brand>
        
        
          
        <div class='flex gap-4 navbars'>
            <div className='navbarc'>
            <button type="button"  onClick={()=>navigate("/homelogin")} class="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center  md:mr-0">Home</button>
            </div>
            <div className='navbarc'>
            <button type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center  md:mr-0">Login Out</button>
            </div>
        
        </div>
         
      </Navbar> 
      
    
  )
}

export default NavbarLoginHome