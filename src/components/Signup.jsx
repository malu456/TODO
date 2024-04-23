import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
    const  [username, setUsername] =  useState('');
    const  [password, setPassword] =  useState('');

    const [submitValue,setSubmitValue]=useState({ 
        username:'',
        password:''
    })

    const  handleChange = (event) => {
		setUsername(event.target.value);
	};
  const  handleChange2 = (event) => {
		setPassword(event.target.value);
	};
    const handleSignup = async e => {
        e.preventDefault();
        try{
          setSubmitValue({username,password});
          console.log(submitValue);
          const res = await axios.post("http://localhost:8800/signup",submitValue);
          console.log(res);
        }
        catch(err)
        {
          console.log(err);
        }
      }
    
   return (
     <div >
        <form onSubmit={handleSignup} >
            <h1>Signup</h1>
            <input type="text" placeholder="username" required onChange={handleChange}/>
            <input type="password" placeholder="password" required onChange={handleChange2}/><br></br>
           <input type="checkbox"/>
            <a href="#">Forgot password</a><br></br>
            <button type="submit">Signup</button>
            <p>New account <a href="/login">Login Here</a></p>
        </form>

     </div>
   );
};
export default Signup;