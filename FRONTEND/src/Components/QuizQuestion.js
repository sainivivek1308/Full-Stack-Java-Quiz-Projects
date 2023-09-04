import React, { useEffect } from 'react'
import { useContext ,useState} from 'react'
import './QuizQuestion.css'
import { Spinner } from 'flowbite-react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight,} from 'react-icons/hi';
import QuizContext from '../Context/Quiz Projects/QuizContext';
import QuizResult from './QuizResult';
import { useNavigate } from 'react-router-dom';
import Navbarr from './Navbarr';
//import { useNavigate } from 'react-router-dom';
const QuizQuestion = () => {
    const [data,Setdata]=useState("")
  const {questionData,addanswermethod,addanswerarray}=useContext(QuizContext);
  //const {questionData,addanswerarray}=useContext(QuizContext)
  console.log("Question data is ",(questionData.id==""));
  const [currentQuestion,setCurrentQuestion]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const navigate=useNavigate();
    // const [objectanswer,setObjectanswer]=useState({id:"",response:""})
    useEffect(()=>{
        if(!(localStorage.getItem("startquiz"))){
            
            navigate("/")
        }
    },[])
    const changeQuestion = ()=>{
        //updateScore();
        const object={"id":questionData.question[currentQuestion].id,
                      "response":String(questionData.question[currentQuestion].options[clickedOption-1])}
        addanswermethod(object);
      
        if(currentQuestion< (questionData.question).length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            console.log(questionData.id)
            axios
            .post("https://quiz-web-application-5h1o.onrender.com/quiz/submit/"+questionData.id,addanswerarray)
            .then((response) => {
                Setdata(response.data)
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
                    setShowResult(true)
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
       
    }
    
    const addoption= (option)=>{
    //   const object={"id":questionData.question[currentQuestion].id,
    //                   "response":String(questionData.question[currentQuestion].options[option])}
    //   addanswermethod(object);
      setClickedOption(option+1)
      //console.log(object);
      //console.log("length add answer array is ",length1);
    }
    
    return (
        <>
        <Navbarr/>  
        <div>
            {(showResult) ? <QuizResult data={data} />:

            (
                (questionData.id != "")?
                (
                <>
                
                <div className='flex gap-4 max-w-xl  flex-col bg-red-500 rounded-3xl m-auto'>
                    <div className="container">
                        {
                                <>
                                <div className="question">
                                    <span id="question-number">{currentQuestion+1}. </span>
                                    <span id="question-txt">{questionData.question[currentQuestion].questionTitle}</span>
                                </div>
                                <div className='option-container'>
                                {questionData.question[currentQuestion].options.map((option,i)=>{
                                    return(
                                        <button 
                        // className="option-btn"
                                            className={`option-btn ${
                                                clickedOption == i+1?"checked":null
                                            }`}
                                            key={i}
                                            onClick={()=>addoption(i)}
                                            >
                                            {option}
                                            </button>
                                        )
                                    })
                                }
                                </div>
                                <Button onClick={changeQuestion}  className="bg-black p-auto m-auto font-bold text-4xl p-1 hover:bg-blue-100 focus:ring-4">
                                        {(currentQuestion< (questionData.question).length-1)?<p>Next</p>:<p>Submit</p>}
                                        <HiOutlineArrowRight className="ml-4 h-6 w-9 font-extrabold text-4xl" />
                                </Button>
                                </>
                            
                        
                        }
                        
                    </div>   
                </div>
                </>
                ):
                <>
                <h1 className='text-center text-red-700'>Please Waiting Question is loading</h1>
                <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" color="warning" size="xl" />
                </div>
                </>
            
                
            )
            }    
           </div>         
        </>
    )

        
}

export default QuizQuestion