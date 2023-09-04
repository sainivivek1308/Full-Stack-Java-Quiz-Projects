import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
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
        fluid
        rounded
        
        style={{fontSize:"20px"}}
       >
        
        
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Quiz Application
          </span>
        {/* </Navbar.Brand>  */}
        <Navbar.Toggle className="text-black text-2xl bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg     dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />
        <Navbar.Collapse>
          <Navbar.Link
            active
            as={Link}
            to="/"
          >
            <p style={{fontSize: '18px'} } >
              Home
            </p>
          </Navbar.Link>
          {
            NavLinkdata.map(namedata=>(
              <Navbar.Link
              as={Link}
  
              to={namedata.namelink}
              >
              <p style={{fontSize: '18px'}  } >
                {namedata.StartData}
              </p>
              </Navbar.Link>
              
            ))
          }
          
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarLogin