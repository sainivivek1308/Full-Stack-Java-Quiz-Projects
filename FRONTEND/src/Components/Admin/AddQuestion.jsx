import React, { useState } from 'react'
import axios from 'axios';
const AddQuestion = () => {
    const [questiontitle,setQuestiontitle]=useState("");
    const [option1,setOption1]=useState("");
    const [option2,setOption2]=useState("");
    const [option3,setOption3]=useState("");
    const [option4,setOption4]=useState("");
    const [category,setCategory]=useState("")
    const [categorytopic,setCategorytopic]=useState("");
    const [difficulty,setdifficulty]=useState("");
    const [rightanswer,setRightanswer]=useState("");
    const [succesmessage,setmesaage]=useState("");
    const submitdata=(e)=>{
        setmesaage("")
        e.preventDefault();
        const data={
            questiontitle:questiontitle,
            category:category,
            options:[option1,option2,option3,option4],
            categorytopic:categorytopic,
            rightanswer:rightanswer,
            difficultylevel:difficulty
        }
        axios
      .post("https://quiz-web-application-5h1o.onrender.com/question/post",data)
      .then((response) => {
        setmesaage("Sucessfully Add data")
        console.log(response.data);
        setQuestiontitle("")
        setCategory("")
        setCategorytopic("")
        setOption1("");
        setOption2("")
        setOption3("")
        setOption4("")
        setRightanswer("");
        setdifficulty("") 
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
    
        console.log(data)
    }
  return (
    <>
          <div className="">
          <h1 className="text-3xl text-red-800 font-semibold mb-4  text-center">Add Question Data</h1>
          <h1 className="text-2xl text-green-400 font-semibold mb-4  text-center">{succesmessage}</h1>
          <form >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Question Title:
              </label>
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                id="name"
                value={questiontitle}
                onChange={(e)=>setQuestiontitle(e.target.value)}
                name="title"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Option1:
              </label>
              <input
                className="border rounded mx-5 w-5/6  py-2 px-2"
                type="text"
                id="email"
                value={option1}
                onChange={(e)=>setOption1(e.target.value)}
                name="option1"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Option2:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                id="email"
                value={option2}
                onChange={(e)=>setOption2(e.target.value)}
                name="option2"
                required
              />
              </div>          
              <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Option3:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                id="email"
                value={option3}
                onChange={(e)=>setOption3(e.target.value)}
                name="option3"
                required
              />          
              </div>
              <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Option4:
              </label>
              <input
                className="border rounded  mx-5 w-5/6 py-2 px-2"
                type="text"
                id="email"
                value={option4}
                onChange={(e)=>setOption4(e.target.value)}
                name="option4"
                required
              />
              </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold " htmlFor="password">
                Category:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                id="password"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                name="category"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold " htmlFor="password">
                CategoryTopic:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                id="password"
                value={categorytopic}
                onChange={(e)=>setCategorytopic(e.target.value)}
                name="categorytopic"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold " htmlFor="password">
                RightAnswer:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                id="password"
                value={rightanswer}
                onChange={(e)=>setRightanswer(e.target.value)}
                name="rightanswer"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-700 text-sm font-bold " htmlFor="password">
                Difficulty:
              </label>
              <input
                className="border rounded mx-5 w-5/6 py-2 px-2"
                type="text"
                value={difficulty}
                onChange={(e)=>setdifficulty(e.target.value)}
                id="password"
                name="difficulty"
                required
              />
            </div>
            <button
              onClick={submitdata}
              className="bg-blue-500   text-xl uppercase ml-20 buttonmedia text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
    </>
  )

}


export default AddQuestion