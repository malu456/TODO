import logo from './logo.svg';
import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';
import Update from './components/Update';

import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  useResolvedPath,
  Redirect
} from "react-router-dom";

import Add from './Add';
import { useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


function App() {
  const  [id, setIdValue] =  useState('');
  const  [description, setDescriptionValue] =  useState('');
  const  [status, setStatusValue] =  useState('');
  const  [createdDate, setDateValue] =  useState('');
  const  [updatedDate, setDateValue2] =  useState('');

  const [apiVar,setApiVar] = useState('');
  const  [submitValue, setSubmitValue] =  useState({
    id : 1 ,
    description : '',
    status : '',
    createdDate : '',
    updatedDate : '',
  });

  const [error,setError] = useState(false)

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setSubmitValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const  handleChange = (event) => {
	// 	setIdValue(event.target.value);
	// };
  // const  handleChange2 = (event) => {
	// 	setDescriptionValue(event.target.value);
	// }; 
  // const  handleChange3 = (event) => {
	// 	setStatusValue(event.target.value);
	// };
  // const  handleChange4 = (event) => {
	// 	setDateValue(event.target.value);
	// };
  // const  handleChange5 = (event) => {
	// 	setDateValue2(event.target.value);
	// };
  


  const handleSubmit = async e => {
    e.preventDefault();
      try{
      setSubmitValue({id,description,status,createdDate,updatedDate});
      console.log(submitValue);
      const res = await axios.post("http://localhost:8800/post",submitValue);
      window.location.reload()

      console.log(res);
    }
    catch(err)
    {
      console.log(err);
    }
  }
    
    // else if(e.target.btn.value == 'update'){
    //   try{
    //     setSubmitValue({id,description,status,createdDate,updatedDate});
    //     console.log(submitValue);
    //     const res = await axios.put(`http://localhost:8800/update/:${id}`,submitValue);
    //     console.log(res);
    //   }
    //   catch(err)
    //   {
    //     console.log(err);
    //   }
    // }
  

  useEffect(() => {
    const fetchAll = async () => {
        try{
            const response = await axios.get("http://localhost:8800/todo");
            // console.log(response.data + "RESPONSE DATA");
        
            setApiVar(response.data);
            // console.log(data + "DATA LOG")
        }
        catch(err)
        {
            console.log(err);
        }
    }
    fetchAll()
},[])

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/' />
      <Route path='/add' element={<Add />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/update/:id' element={<Update />} />
      </Routes>      
      </BrowserRouter>

      {/* <Login /> */}


      <form onSubmit={handleSubmit}>
      <label>ID:
          <input type="text" name='id' onChange={handleChange} />
        </label>
        <p> {id}</p>

        <label>Description:
          <input type="text" name='description' onChange={handleChange} />
        </label>
        <p> {description}</p>

        <label>Status :
          <input type="text" name="status" onChange={handleChange} />
        </label>
        <p> {status}</p>

        <label>CREATED DATE:
          <input type="text" name='createdDate' onChange={handleChange} />
        </label>
        <p> {createdDate}</p>

        <label>UPDATED DATE:
          <input type="text" name='updatedDate' onChange={handleChange} />
        </label>
        <p> {updatedDate}</p>
        <button type='submit'  name='btn' value='add'>ADD</button>
        {/* <button type='submit' name='btn' value='update'>Update</button> */}

      </form>
      <br></br><br />

      
    </div>
  );
}

export default App;
