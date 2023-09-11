import React, { useState } from 'react'
import NavbarLoginHome from './NavbarLoginHome'
import { useEffect } from 'react'
import { Spinner } from 'flowbite-react'
import axios from 'axios'
const ViewQuestionAdmin = () => {
    const [data ,setData]=useState();
    const url="https://quiz-web-application-5h1o.onrender.com/question/get"
    useEffect(() => {
        axios.get(url).then((response) => {
            console.log("data is :",response.data)
          setData(response.data);
          
        });
      }, [url]);
  return (
    <>
        <NavbarLoginHome/>
        
        <div class="relative overflow-x-auto shadow-md mb-7 bg-blue-300 p-3 rounded-lg mt-7 mx-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xl uppercase text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            S.NO
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Question title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Option 1
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Option 2
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Option 3
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Option 4
                        </th>
                        <th scope="col" class="px-6 py-3">
                            category
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Category Topic
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Right Answer
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Difficulty Level
                        </th>
                    </tr>
                </thead>
                <tbody className='text-black p-3 m-7 rounded-lg text-xl'>
                    
                    {(data)?data.map((dataitem, index) => (
                    
                    <tr key={index} className=' '>
                    <th className=' p-4'>{index+1}</th>
                    <td className='  p-4   '>{dataitem.questiontitle} </td>
                    
                    
                    {
                        dataitem.options.map((option,index)=>(
                            <td className='p-4'>{option}</td>
                        ))
                    }
                    <td className='p-4'>{dataitem.category}</td>
                    <td className='p-4'>{dataitem.categorytopic}</td>
                    <td className='p-4'>{dataitem.rightanswer}</td>
                    <td className='p-4'>{dataitem.difficultylevel}</td>
                    

                </tr>
                
                    
                    )):<>
                    <div className='flex  flex-col justify-center items-center mx-64'>
                    <h1 className='text-center text-red-700'>Please Waiting Question is loading</h1>
                    <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" color="warning" size="xl" />
                    </div>
                    </div>
                    
                    </>
                }
                    
                </tbody>
            </table>
        </div>

        
    </>
  )
}

export default ViewQuestionAdmin