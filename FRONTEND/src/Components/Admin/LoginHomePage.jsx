import React from 'react'
import NavbarLogin from './NavbarLogin'
import { useNavigate } from 'react-router-dom'

const LoginHomePage = () => {
  const navigate=useNavigate();
  return (
    <>
    <NavbarLogin />
    <div className='flex  h-100 flex-wrap  gap-5 justify-between ml-5 mr-7 mt-5'>
      <div  className='mt-1 ml-5'>
        <div  class="block max-w-xl p-5 bg-white border p-auto  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 class="mb-2 text-4xl font-bold tracking-tight text-red-700 dark:text-white mt-3">Welcome to the Quiz Admin page!</h3>
          <h4 class="font-normal text-xl text-gray-700 dark:text-gray-400" mt-3>This is where you can create, manage,and customize quizzes  for your website</h4>
          <h4 class="font-normal text-xl text-gray-700 dark:text-gray-400 mt-3">Whether you're a teacher, a blogger, or just someone who wants to engage your audience with fun  and interactive quizzes,you're in the right place.
          </h4> 
        </div>
      </div>
      <div className=''><img class="h-5/5 max-w-md rounded-lg" src="https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image description" /></div>
      <div className='flex flex-wrap m-auto gap-10'>
        <div className='flex items-center justify-between gap-8 flex-wrap m-8'>
          <button type="button" onClick ={ ()=>navigate("/Questionadd")} class="text-white  bg-black hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-4 text-center mr-3 md:mr-0">Add Question</button>
          <button type="button"   disabled onClick ={ ()=>navigate("/ViewQuestion")} class="text-white p-3 bg-black  hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-4 text-center mr-3 md:mr-0">View All Question</button>
          <button type="button"  disabled  onClick ={ ()=>navigate("/Viewuser")} class="text-white p-3 bg-red-700 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-4 text-center mr-3 md:mr-0">View User</button>
          
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}

export default LoginHomePage