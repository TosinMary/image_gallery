import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';



function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/dragIt");
        } catch (error) {
            alert("Please input correct Email/Password. If problem persist, ensure you have good connection")
            console.error(error)
            
        }

    }
  return (
    <>
    <div className='log-in-container'>
        <div> 
        <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
            <input 
            type='email'
             placeholder='enter your email' 
             value={email}
             onChange={(e) => 
                setEmail(e.target.value)
             }
             ></input> <br></br>
            <input type='password'
             placeholder='enter your password' 
             value={password}
             onChange={(e) => 
                setPassword(e.target.value)
             }
             ></input><br></br>
             <div className='btn'>
              <button type='submit'>Submit</button>
             </div>
           
        </form>
        <div className='form-base'>
        { <Link to="/signup" className='form-base'><p >Proceed to <span className='form-link'>Create Account.</span></p></Link>}
        </div>
       
    </div>
    </div>
    </>
  )
}

export default LogIn
