import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

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
        
        
          {/* <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Quiz Application
          </span> */}
        {/* </Navbar.Brand>   */}
        {/* <Navbar.Toggle className="text-black text-2xl bg-blue-700 hover:bg-blue-600 focus:ring-4 font-medium rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />
        <Navbar.Collapse  className='text-white'>
          <Navbar.Link
            active
            as={Link}
            to="/"
            className='bg-black'
            
          >
            <p style={{fontSize: '18px'} }  className='bg-blue-500 p-2 rounded-lg text-white'>
              Home
            </p>
          </Navbar.Link>
          {
            NavLinkdata.map(namedata=>(
              <Navbar.Link
              as={Link}
              className='bg-black hover:bg-black'
              to={namedata.namelink}
              >
              <p style={{fontSize: '18px'} } className='bg-red-500 p-2 rounded-lg text-white' >
                {namedata.StartData}
              </p>
              </Navbar.Link>
              
            ))
          }
          
        </Navbar.Collapse> */}
        <div className='flex mt-5 gap-3 '>
        <button type="button"  onClick={()=>navigate("/")} class="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-3 md:mr-0">Home</button>
        <button type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-3 md:mr-0">Login Out</button>
        </div>
         
      </Navbar> 
      
{/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

    </>
  )
}

export default NavbarLogin