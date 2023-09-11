import React  from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StartQuiz from './StartQuiz';
import Navbarr from './Navbarr';
import './Navbarr.css'

const Home = () => {
  return (
    <>
    <div className=''>
    <Navbarr/>    
    <div className='flex flex-wrap    justify-between border-red-600 w-full' >
      <div  className="block max-w-xl p-3 ml-8  mx-4 dark:bg-red-800 dark:border-red-700 dark:hover:bg-gray-700"> 
        <h1 className="mb-4 text-4xl  bg-sky-400 ml-5 font-bold leading-none tracking-tight text-red-600   md:text-5xl lg:text-6xl dark:text-white m-auto">MAKE AN INTERACTIVE QUIZ APPLICATION FOR USERS</h1>
        <h1 class="mb-6 text-3xl ml-5 font-bold ">Test people’s knowledge with an interactive online quiz</h1>
        
        <div className='block  p-6    dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <StartQuiz/>
        
        </div>
        
      </div>
      <div className='flex flex-wrap  flex-col gap-5  ml-16   mediacard'>
        
        <div class="max-w-lg flex gap-5   p-2 bg-sky-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='p-2'>
              <NavLink  as={Link} to="#" className="object-cover">
              <img width="500" height="500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIpceUp1_AhcvNw6OgdONZo-W1fEfAT_27A&usqp=CAU" alt="java-coffee-cup-logo"/>
              </NavLink>
            </div>
            
            <div class="p-5">
                
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Java is a popular programming language, created in 1995.</h5>
                
                <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</p>
                <Link to="https://www.w3schools.com/java/java_intro.asp" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
        <div class="max-w-lg flex gap-0.5 mb-4 bg-sky-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='m-1 p-2'>
              <NavLink  as={Link} to="#" className="object-cover">
              <img width="500" height="500" src="https://i.etsystatic.com/21540718/r/il/1d3613/3014816508/il_570xN.3014816508_h2qh.jpg" alt="java-coffee-cup-logo"/>
              </NavLink>
            </div>
            
            <div class="p-5 ">
                
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</h5>
                
                <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">Python was designed for readability, and has some similarities to the English language with influence from mathematics.</p>
                <Link to="https://www.w3schools.com/python/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
      
      </div>
        
    </div>
    </div>
    </>
  )
}

export default Home