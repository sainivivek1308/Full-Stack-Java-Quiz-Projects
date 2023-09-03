import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Spinner } from 'flowbite-react';
import QuizContext from '../Context/Quiz Projects/QuizContext';
import StartQuiz from './StartQuiz';
import Navbarr from './Navbarr';
const QuizResult = ({data}) => {
    const navigate=useNavigate();
    //const id=questionData.id
    const home=()=>{
        localStorage.clear();
        
        navigate("/")
    }
    const Startquiz=()=>{
      navigate("/startQuiz")
      localStorage.clear();
    }
   
  return (
    <>
    <Navbarr/>
    {data?
      (<>
      <div className=' flex bg-red-500 rounded-2xl  flex-col justify-between  p-4 mx-2 '>
          <div className='flex flex-wrap items-center justify-center'>
          <h2 className='text-white text-lg font-medium text-center bg-black rounded-2xl p-3'>Score of  Quiz  is {data} </h2>
          </div>
          <div className='flex flex-wrap justify-between m-8 gap-8'>
            <div className=''>
              <button  onClick={home} className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'> Go To Home</button>
            </div>  
            <div className=''>
              <button onClick={Startquiz} 
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'> Go to Start Quiz</button>
            </div>
          </div>
          <div>
          </div>
        
      </div>
      </>):
      <div className="text-center m-32">
        <Spinner aria-label="Center-aligned spinner example" color="info" size="xl" />
      </div>
    }
    </>
    //   {
    //     data?(<>QuizResult
        
    //     </>):
    //   }
    // </div>
  )
}

export default QuizResult