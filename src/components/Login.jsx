import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


    const Login = () => {
                const navigate = useNavigate();

        
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
        const handleLogin = async e => {
            e.preventDefault();
            try{
              setSubmitValue({username,password});
            //   console.log(submitValue);
              const res = await axios.post("http://localhost:8800/login",submitValue);
              console.log(res);
              if(res.data.length != 0){
                navigate("/add");
              }
}
            catch(err)
            {
              console.log(err);
            }
          }
        
       return (
    
    

        <div >
        <form onSubmit={handleLogin} >
            <h1>login</h1>
            <input type="text" placeholder="username" name='username' required onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" required onChange={handleChange2}/><br></br>
           
            <button type="submit">login</button>
            
        </form>

     </div>
    )
}

export default Login;