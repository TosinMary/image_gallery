import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';



function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/LogIn");
        } catch (error) {
            alert("Details already exist, Proceed to logIn.")
            console.error(error)
            
        }

    }
  return (
    <>
    <div className='sign-in-container'>
        <div>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
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
             <button type='submit'>SignUp</button>
             </div>
           
        </form>
        <div className='form-base'>
        { <Link to="/login" className='form-base'><p >Already have account, Proceed to <span className='form-link'>Log In</span></p></Link>}
        </div>
    </div>
    </div>
    </>
  )
}

export default SignUp;
