import React, { useContext, useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import QuizQuestion from "./QuizQuestion"
import './QuizQuestion.css'
import QuizContext from '../Context/Quiz Projects/QuizContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const StartQuiz = () => {
  const navigate=useNavigate();
  const {getdata}=useContext(QuizContext); 
  const [click,setClick]=useState(false); 
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
  async function hello(event){
  
    event.preventDefault();
    //alert("Clicked");
    //console.log(postuserdata)
    //getdata(postuserdata);
    axios
      .post("https://quiz-backend-hf3v.onrender.com/quiz/startquiz",postuserdata)
      .then((response) => {
        getdata(response.data)
        console.log(response.data);
        
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
      navigate("/StartQuiz") 
      //setClick(true);
    
  }
  return (
    <>
      <div className='flex gap-4 max-w-xl  flex-col bg-red-400 rounded-3xl' style={{margin:"auto"}}>
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
                <TextInput id="password2" required shadow placeholder="Enter Category"
                  name="category"
                  value={postuserdata.category}
                  onChange={Onchangehandle}
                  type="text" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Enter Category Topic" />
                  
                </div>
                <TextInput placeholder="Enter category Topic" required shadow 
                  name="categorytopic"
                  value={postuserdata.categorytopic}
                  onChange={Onchangehandle}
                  type="text" />          
                </div>
                <Button className="bg-black" type="submit" >
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