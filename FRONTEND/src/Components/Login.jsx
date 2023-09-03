import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";
import Navbarr from './Navbarr';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState("");
    const [passwordalert,setPasswordalert]=useState(false) 
    const [emailalert,setEmailalert]=useState(false) 
    const [namealert,setNamealert]=useState(false) 
    
    const navigate=useNavigate()
    const submit1 = () => {
      console.log("hello")
      confirmAlert({
        title: "Confirm to submit",
        message: "Are you sure to submit the detail.",
        buttons: [
          {
            label: "Yes",
            onClick: () =>
            {
              console.log(passwordalert)
              console.log(emailalert)
              
              if((passwordalert) && (emailalert) && (namealert)){
                  alert("submit sucess")
                  //localStorage.setItem("loginsucess",true)
                  navigate("/homelogin")            
              }
              else{
                alert("Please Enter right details according to validation")
                navigate("/Login")
              }

              
              console.log('Email:', email);
              console.log('Password:', password);
            } 
          },
          {
            label: "No"
            // onClick: () => alert("Click No")
          }
        ]
      });
    };
    const handleLogin = (e) => {
          // Add your login logic here
          
        e.preventDefault();
        console.log(passwordalert)
        console.log(emailalert)
        
        if((passwordalert) && (emailalert) && (namealert)){
            alert("submit sucess")
            navigate("/loginhome")            
        }
        else{
          alert("Please Enter right details according to validation")
          navigate("/Login")
        }

        
        console.log('Email:', email);
        console.log('Password:', password);
    };
    
    const setname=(e)=>{
      const newname = e.target.value;
      setName(newname);
      const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
      //Pattern pattern = Pattern.compile(regx,Pattern.CASE_INSENSITIVE);
      //Matcher matcher = pattern.matcher(txt);
      // Email format validation using a regular expression
      //const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setNamealert(pattern.test(newname));
        
      }
    
    const setemail=(e)=>{
      const newEmail = e.target.value;
      setEmail(newEmail);
  
      // Email format validation using a regular expression
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setEmailalert(emailRegex.test(newEmail));
        
      }
    const setpassword=(e)=>{
      setPasswordalert(false)
      const newPassword = e.target.value;
      setPassword(newPassword);
  
      // Password validation rules
      const hasUpperCase = /[A-Z]/.test(newPassword);
      const hasLowerCase = /[a-z]/.test(newPassword);
      const hasDigit = /[0-9]/.test(newPassword);
      const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);
      const isLengthValid = newPassword.length >= 8;
  
      // Check if all validation rules are met
      setPasswordalert(
        hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid
      );  
    }
  return (
    <>
      <Navbarr/>
      <div className="bg-pink-500  flex flex-col justify-center  m-auto  mt-4 max-w-xl px-7 pb-2 rounded-3xl shadow-lg">
        <h1 className="text-3xl text-gray-600 text-center font-bold mb-6">Login</h1>
        
        <div className="mb-2">
          <label htmlFor="email" className="block text-white  font-semibold">Name</label>
          <input
            type="text"
            aria-describedby="helper-text-explanation"
            id="email"
            required
            autoComplete='off'
            className="w-full p-2 border rounded text-black"
            placeholder="Vivek Saini"
            value={name}
            onChange={setname}
          />
          {!namealert && (
                <div class="flex items-center p-2  mt-1.5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Alert!</span> Please Type only uppercase and lowercase first name and last name .
                </div>
                </div>
          )}
          
            </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-white  font-semibold">Email</label>
          <input
            type="email"
            aria-describedby="helper-text-explanation"
            id="email"
            required
            autoComplete='off'
            className="w-full p-2 border rounded text-black"
            placeholder="name@gmail.com"
            value={email}
            onChange={setemail}
          />
          {!emailalert && (
                <div class="flex items-center p-2  mt-1.5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Alert!</span> Please add @  and domain(.com) in email .
                </div>
                </div>
          )}
          
            </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-white font-semibold"> Password</label>
          <input
            
            type="password"
            id="password"
            className="w-full text-black p-2 border rounded"
            placeholder="Enter your password"
            value={password}
            onChange={setpassword}
          />
          
          {!passwordalert ?(
            <div class="flex p-4 mb-4 mt-1.5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Danger</span>
            <div>
                <span class="font-medium">Ensure that these requirements are match:</span>
                <ul class="mt-1.5 ml-4 list-disc list-inside">
                    <li> At least 8 characters (and up to 100 characters)</li>
                    <li>At least one lowercase character</li>
                    <li>At least one Uppercase character</li>
                    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                </ul>
            </div>
            </div>
          ):"" }
          
            </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={submit1}
        >
          Login 
        </button>
      </div>
    </>
  )
}

export default Login