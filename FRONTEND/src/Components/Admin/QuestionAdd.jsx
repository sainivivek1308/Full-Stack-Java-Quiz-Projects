import React from 'react'
import NavbarLogin from './NavbarLogin'
import NavbarLoginHome from './NavbarLoginHome'
import './LoginHome.css'
import AddQuestion from './AddQuestion'
const QuestionAdd = () => {
  return (
    <>
      <NavbarLoginHome/>
      <div className="min-h-screen w-full  mainmedia   questiomedia justify-between flex flex-wrap gap-8  bg-gray-100">
        <div className='bg-white w-2/4  widthmedia ml-4 mt-3 p-5 rounded-xl shadow-md '><AddQuestion/></div>
        <div className='right flex flex-col justify-between gap-5'>
        <div className='mt-3 flex flex-col gap-4'>
          <img class="h-3/4 max-w-lg rounded-lg imgclass1" src="https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image description" /></div>
          <img class="h-1/2 max-w-lg rounded-lg imgclass1" src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image description" />
        </div>
    </div>
    </>
  )
}

export default QuestionAdd