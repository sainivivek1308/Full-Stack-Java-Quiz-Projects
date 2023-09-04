//import './App.css';
import Contact from './Components/Contact';
import NotFound404 from './Components/NotFound404';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import QuizState from './Context/Quiz Projects/QuizState';
import './Components/Navbarr.css'
import QuizQuestion from "./Components/QuizQuestion"
import QuizResult from './Components/QuizResult';
import Login from './Components/Login';
import "react-confirm-alert/src/react-confirm-alert.css";
import LoginHomePage from './Components/Admin/LoginHomePage';
import ViewUser from './Components/Admin/ViewUser';
import QuestionAdd from './Components/Admin/QuestionAdd'
import ViewQuestionAdmin from './Components/Admin/ViewQuestionAdmin';
function App() {
  
  return (
    <>  
        <QuizState>
          <BrowserRouter>
                <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/quizresult" exact element={<QuizResult/>} />
                <Route path="/startQuiz" exact element={<QuizQuestion/>} />
                  {/* Admin Login Urls */}
                <Route path='/login' exact element={<Login/>}  />
          
                <Route path="/homelogin" exact element={<LoginHomePage/>}></Route>
                <Route path="/Viewuser" exact element={<ViewUser/>}></Route>
                <Route path="/Questionadd" exact element={<QuestionAdd/>}></Route>
                <Route path="/ViewQuestion" exact element={<ViewQuestionAdmin/>}></Route>
                
                <Route path="*" element={<NotFound404/>} />
                
              </Routes>
          </BrowserRouter>
        </QuizState>
        
      
    </>
  );
}

export default App;
