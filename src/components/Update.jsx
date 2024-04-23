
import React from "react";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    // const  [description, setDescriptionValue] =  useState('');
    // const  [status, setStatusValue] =  useState('');
    // const  [createdDate, setDateValue] =  useState('');
    // const  [updatedDate, setDateValue2] =  useState('');

  const navigate = useNavigate()
  const location = useLocation();


  const todoId = location.pathname.split("/")[2];

   
  
//   const  handleChange2 = (event) => {
// 		setStatusValue(event.target.value);
// 	};
//   const  handleChange3 = (event) => {
// 		setDateValue(event.target.value);
// 	};
//     const  handleChange4 = (event) => {
// 		setDateValue2(event.target.value);
// 	};

    const [todo,setTodo] = useState(
        {
            description:"",
            status:"",
            createdDate:"",
            updatedDate:"",
        }
    );

    const [error,setError] = useState(false)

    const  handleChange = (e) => {
        setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}; 

    const handleClick = async e => {
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:8800/update/${todoId}`,todo)
            console.log(res);
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            Update Form<br>
            </br>
            <input type="description" name="description" placeholder="description"  onChange={handleChange}></input>
            <input type="status" name="status" placeholder="status"  onChange={handleChange}></input>
            <input type="createdDate" name="createdDate" placeholder="createdDate"  onChange={handleChange}></input>
            <input type="updatedDate" name="updatedDate" placeholder="updatedDate"  onChange={handleChange}></input>
            <button onClick={handleClick}>update</button>

            
            
            
        </div>
    )
};
export default Update;