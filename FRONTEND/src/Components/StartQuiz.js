import React, { useContext, useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import './QuizQuestion.css'
import QuizContext from '../Context/Quiz Projects/QuizContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const StartQuiz = () => {
  const navigate=useNavigate();
  const {getdata}=useContext(QuizContext); 
  const [postuserdata,setpostuserdata]=useState({
    name:'',
    category:'',
    categorytopic:''
  }) 
  //const [questiondata,setQuestiondata]=useState({id:'',question:''});
  const Onchangehandle=(event)=>{
    
    setpostuserdata({...postuserdata,[event.target.name]:event.target.value})
    //console.log(event.target.name," and value is ",event.target.value)
  }
  function hello(event){
  
    event.preventDefault();
    //alert("Clicked");
    console.log(postuserdata)
    getdata(postuserdata);
    axios
      .post("https://quiz-web-application-5h1o.onrender.com/quiz/startquiz",postuserdata)
      .then((response) => {
        getdata(response.data)
        console.log(response.data);
        localStorage.setItem("startquiz",true);
        navigate("/StartQuiz")  
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
      //await setTimeout(hello,60000);
       
      //setClick(true);
    
  }
  return (
    <>
      <div className='flex gap-4 max-w-xl  flex-col bg-pink-500 rounded-3xl' style={{margin:"auto"}}>
        <div className=''>
        <h2 className='text-4xl font-medium  text-white p-3 text-center'>Quiz APP</h2>
        {   
            <form  className='flex flex-col gap-4 shadow-md p-5' onSubmit={hello}>
              <div >
                <div className="mb-2 block">
                  <Label value="Enter Name" />
                </div>
                <TextInput placeholder="Enter Name" required shadow 
                  type="text"
                  name="name"
                  value={postuserdata.name}
                  onChange={Onchangehandle} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Enter Category"/>
                  
                </div>
                <div className='flex flex-row gap-9'>
                  <div className=''>
                  <input id="password2" required shadow placeholder="Enter Category"
                  name="category"
                  value="Java"
                  onChange={Onchangehandle}
                  type="radio" />
                  Java
                  </div>
                  <div>
                    <input id="password2" required shadow placeholder="Enter Category"
                      name="category"
                      value="Python"
                      disabled
                      onChange={Onchangehandle}
                      type="radio" />Python
                    
                  </div>
                  <div>
                    <input id="password2" required shadow placeholder="Enter Category"
                      name="category"
                      value="HTML"
                      disabled
                      onChange={Onchangehandle}
                      type="radio" />HTML
                    
                  </div>
                  <div>
                    <input id="password2" required disabled shadow placeholder="Enter Category"
                      name="category"
                      value="Javascript"
                      onChange={Onchangehandle}
                      type="radio" />Javascript
                    
                  </div>
                </div>
                
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Enter Category Topic" />
                  
                </div>
                <div className='flex flex-row gap-9'>
                  <div className=''>
                  <input id="password2" required shadow placeholder="Enter Category"
                  name="categorytopic"
                  value="Basic"
                  onChange={Onchangehandle}
                  type="radio" />
                  Basic
                  </div>
                  <div>
                    <input id="password2" required shadow placeholder="Enter Category"
                      name="categorytopic"
                      value="Array"
                      disabled
                      onChange={Onchangehandle}
                      type="radio" />Array
                    
                  </div>
                  <div>
                    <input id="password2" required shadow placeholder="Enter Category"
                      name="categorytopic"
                      value="String"
                      disabled
                      onChange={Onchangehandle}
                      type="radio" />String
                    
                  </div>
                  <div>
                    <input id="password2" required disabled shadow placeholder="Enter Category"
                      name="categorytopic"
                      value="Collection framework"
                      onChange={Onchangehandle}
                      type="radio" />Collection framework

                  </div>
                  <div>
                    <input id="password2" required shadow placeholder="Enter Category"
                      name="categorytopic"
                      value="OOPS Concept"
                      disabled
                      onChange={Onchangehandle}
                      type="radio" />OOPS concept
                    
                  </div>
                  
                </div>
                 
                </div>
                <Button className="bg-sky-800 font-bold text-3xl" type="submit" >
                  Start Quiz
                </Button>
                
            </form>
            
                        
          
        }
      </div>
      </div>
      
    </>
  )
}

export default StartQuiz