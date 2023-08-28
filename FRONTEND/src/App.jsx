//import './App.css';
import Navbarr from './Components/Navbarr';
import Contact from './Components/Contact';
import StartQuiz from './Components/StartQuiz';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import QuizState from './Context/Quiz Projects/QuizState';
import './Components/Navbarr.css'
import QuizQuestion from "./Components/QuizQuestion"
import QuizResult from './Components/QuizResult';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
  return (
    <>  
        <QuizState>
          <BrowserRouter>
          
              <Navbarr/>
              
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Full-Stack-Java-Quiz-Projects" element={<Home/>} />
                
                <Route path="/contact" element={<Contact/>} />
                <Route path="/enterdetail" element={<StartQuiz/>} />
                <Route path="/quizresult" element={<QuizResult/>} />
                <Route path="/startQuiz" element={<QuizQuestion/>} />
                <Route path="/*" element={<Contact/>} />
                
              </Routes>
          
            
              
          </BrowserRouter>
        </QuizState>
        
      
    </>
  );
}

export default App;
