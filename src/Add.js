import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Add = () => {
  const [apiVar,setApiVar] = useState([]);
  
  const  [updateValue, setUpdateValue] =  useState({
    id : 0,
    description : '',
    status : '',
    createdDate : '',
    updatedDate : '',
  });

  const  [deleteValue, setDeleteValue] =  useState({
    id : 0,
    description : '',
    status : '',
    createdDate : '',
    updatedDate : '',
  });

  const  [id, setIdValue] =  useState('');
  const  [description, setDescriptionValue] =  useState('');
  const  [status, setStatusValue] =  useState('');
  const  [createdDate, setDateValue] =  useState('');
  const  [updatedDate, setDateValue2] =  useState('');


  const handleUpdate = async e => {
    e.preventDefault();
    try{
      setUpdateValue({id,description,status,createdDate,updatedDate});
      console.log(updateValue);
      const res = await axios.put("http://localhost:8800/update"+id,updateValue);
      // window.location.reload()
      console.log(res);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/todo/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

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

    return(
        <div>
          {/* {console.log(apiVar.data.map(dat => {
            dat.title
        }))} */}
        {/* {
            console.log(apiVar.data.map(function(item, i){
                console.log(item);
              }))
        } */}
        
       {/* {
        apiVar.map((value) => {
            for(let property in value) {
              console.log(value[property]);
          }
        })
       } */}


{/* {apiVar.map((d) => <li key={d.id}>{d.id }</li>)}
{apiVar.map((d) =><li key={d.id}>{d.title}</li> )}
{apiVar.map((d) => <li key={d.id}>{d.createdDate}</li> )} */}

{/* <form onSubmit={handleUpdate}>
      <label>ID:
          <input type="text" value={id} />
        </label>

        <label>Description:
          <input type="text" value={description} />
        </label>

        <label>Status :
          <input type="text" value={status} />
        </label>

        <label>CREATED DATE:
          <input type="text" value={createdDate}  />
        </label>

        <label>UPDATED DATE:
          <input type="text" value={updatedDate} />
        </label>
        <button type='submit'>Update</button>

      </form> */}

    <table>
    

    <tr>
      <th>Id</th>
      <th>Description</th>
      <th>Status</th>
      <th>created date</th>
      <th>updated date</th>
    </tr> 
    <tr>

   
    <td>    {apiVar.map((d) => <tr><td><li key={d.id}>{d.id == 0 ? null :  d.id  }</li></td><td><button><Link to={`/update/${d.id}`}>UPDATE</Link></button ></td><td><button onClick={() => handleDelete(d.id)}>DELETE</button></td></tr>)} </td>
    <td>    {apiVar.map((d) =><li key={d.id}>{d.description}</li> )} </td>
    <td>    {apiVar.map((d) =><li key={d.id}>{d.status}</li> )} </td>
    <td>    {apiVar.map((d) => <li key={d.id}>{d.createdDate }</li>)}</td>
    <td>    {apiVar.map((d) => <li key={d.id}>{d.updatedDate }</li>)}</td>
    <td>  </td>
    </tr>
  
    
  </table>

           
            {/* {apiVar.data.map(a => {
                return (
                  <li key={a.id}>
                    {a.title}
                  </li>
                )
              })} */}

              {/* {
                apiVar.data.map(dat => (
                    {dat.title}
                ))
              } */}
           
        </div>
    )
}

export default Add;