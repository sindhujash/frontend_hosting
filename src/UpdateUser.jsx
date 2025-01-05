import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function UpdateUser() {
  const {id} = useParams();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[address,setAddress]=useState();
  const navigate=useNavigate();
  
  const update =(e) =>{
    e.preventDefault();
    axios.put(`http://localhost:3000/api/user/update/${id}`,{name,email,address})
    .then(result=>{
        console.log("updated data")
        navigate('/');
    }) 
    .catch(err=>{
      console.log(err)
  })
  }
  return (
    <div>
        <form onSubmit={update}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Email</label>
                <input type="email" value ={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Address</label>
                <input type="text" value = {address} onChange={(e)=>setAddress(e.target.value)}/><br/>
                <button type ="submit">update</button>
        </form>
    </div>
  )
}

export default UpdateUser

