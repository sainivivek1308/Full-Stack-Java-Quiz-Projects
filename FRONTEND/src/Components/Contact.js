import React from 'react'
import Navbarr from './Navbarr'
const Contact = () => {
  return (
    <>
    <div className='mr-6'>
    <Navbarr />
    </div>
    <div className="block max-w-full h-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-6">
    
    <h5 class="mb-2 text-xl font-bold  bg-cyan-300 text-gray-700  p-2 rounded-full tracking-tight text-gray-900 text-center dark:text-white">About Us</h5>
    <p class="font-normal text-gray-800 dark:text-gray-400">
      Welcome to <span className='font-bold text-red-600'> Quiz Application </span>, where knowledge meets fun! We are passionate about quizzing and believe that learning can be an exciting journey filled with curiosity and discovery.
    </p>
    <h5 class="mb-2 text-xl font-bold text-center  rounded-full p-2  m-2  bg-cyan-300 text-gray-700 tracking-tight text-gray-900 dark:text-white">
      Our Story
    </h5>
    <p class="font-normal text-gray-800 dark:text-gray-400">
      Founded by a group of avid quizzers, <span className='font-bold text-red-600'> Quiz Application </span> was born out of a shared love for trivia and the desire to create a platform that makes learning entertaining. We wanted to provide a place where people of all ages could challenge themselves, expand their knowledge, and have a great time doing it.
    </p>
    <h5 class="mb-2 text-xl font-bold  text-center rounded-full p-2  m-2 tracking-tight  bg-cyan-300  text-gray-900 dark:text-white">
      Why Choose Us?
    </h5>
        <ul class="font-normal text-gray-800 dark:text-gray-400">
      <li>
      <span className='font-bold text-red-500'>Learn Something New:</span> Every quiz is an opportunity to gain knowledge in a fun and engaging way. Whether you're a student looking for study aids or simply curious, our quizzes have something to offer.
      </li>
      <li>
      <span className='font-bold text-red-500'>Entertainment on Demand:</span> Need a break from your routine? Our quizzes are a great way to relax and have fun. You can access them anytime, anywhere.
      </li>
      <li>
      <span className='font-bold text-red-500'>Challenge Yourself:</span>
       Test your knowledge and improve your cognitive skills. Our quizzes are designed to challenge your memory, critical thinking, and problem-solving abilities.
      </li>
      </ul>
    
     
    </div>
    
    </>
  )
}

export default Contact