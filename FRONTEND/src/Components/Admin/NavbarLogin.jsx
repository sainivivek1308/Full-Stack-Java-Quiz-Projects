import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginHome.css'

const NavbarLogin = () => {
  const navigate=useNavigate();
    const NavLinkdata=[
        {
          "namelink":"/Viewuser",
          "StartData":"View Users"  
        },
        {
          "namelink":"/Questionadd",
          "StartData":"Add Question"
        },
        {
          "namelink":"/ViewQuestion",
          "StartData":"View Question"
        },
        
      ]
  return (
    <>
    
      <Navbar
        
        
        rounded
        
        style={{fontSize:"20px"}}
       >
        <Navbar.Brand >
        <span className="self-center whitespace-nowrap  text-3xl  font-bold  dark:text-white text-blue-600">
          Quiz Admin Application
        </span>
      </Navbar.Brand>
        
        
          
        <div class='flex mt-5 gap-4 navbars'>
        <button type="button"  onClick={()=>navigate("/")} class="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-3 md:mr-0">Main Home</button>
        <button type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-3 md:mr-0">Login Out</button>
        </div>
         
      </Navbar> 
      
    </>
  )
}

export default NavbarLogin