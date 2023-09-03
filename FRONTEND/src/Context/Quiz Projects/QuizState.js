import React, { useEffect, useState } from 'react'
import QuizContext from './QuizContext'
const getquestionfromlocalstorage=()=>{
  let list=localStorage.getItem("questionset");
  if(list==null){
    return ({id:'',question:[{
      id:"",
      questionTitle:"",
      options:[]
    }]})
    
  }
  else{
    let data=localStorage.getItem("questionset");
    return JSON.parse(data)
  }
}
const QuizState = (props) => {
    const data={"name":"Vivek","branch": "Ce"}
    const [questionData,setquestion]=useState(getquestionfromlocalstorage);
    const addanswerarray=[];
    const addanswermethod=(answer)=>{
      addanswerarray.push(answer);
      console.log(addanswerarray);
      console.log(addanswerarray.length);
    }
    const getdata=(data)=>{
      setquestion(data);
        
    }
    useEffect(()=>{
      console.log("click")
      localStorage.setItem("questionset",JSON.stringify(questionData));
    },[questionData])
    
    
  return (
    <QuizContext.Provider value={{data,questionData,getdata,addanswermethod,addanswerarray}}>
        {props.children}
    </QuizContext.Provider>
  )
}

export default QuizState