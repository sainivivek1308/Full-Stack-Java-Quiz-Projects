import React from 'react'
import Navbarr from './Navbarr'

const NotFound404 = () => {
  return (
    <>
    <Navbarr/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
      </div>
    </div>
    </>
  )
}

export default NotFound404