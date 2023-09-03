//import './App.css';
import Navbarr from './Components/Navbarr';
import Contact from './Components/Contact';
import StartQuiz from './Components/StartQuiz';
import NotFound404 from './Components/NotFound404';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import QuizState from './Context/Quiz Projects/QuizState';
import './Components/Navbarr.css'
import QuizQuestion from "./Components/QuizQuestion"
import QuizResult from './Components/QuizResult';
import Login from './Components/Login';
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from 'react-router-dom';
import LoginHomePage from './Components/LoginHomePage';
function App() {
  
  return (
    <>  
        <QuizState>
          <BrowserRouter>

              
                
                <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/Full-Stack-Java-Quiz-Projects"  exact element={<Home/>} />
                
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/quizresult" exact element={<QuizResult/>} />
                <Route path="/startQuiz" exact element={<QuizQuestion/>} />
                
                <Route path='/login' exact element={<Login/>}  />
          
                <Route path="/homelogin" exact element={<LoginHomePage/>}></Route>
                
                <Route path="*" element={<NotFound404/>} />
                
              </Routes>
          </BrowserRouter>
        </QuizState>
        
      
    </>
  );
}

export default App;
