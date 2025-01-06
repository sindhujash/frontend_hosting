import React, {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
const User=()=> {
const[user, setUser] = useState([]);

useEffect(() => {
    axios.get('https://backend-hosting-s9r8.onrender.com/api/user/fetch')
    .then(result => {
        setUser(result.data.users)       
    })
    .catch(err=>{console.log(err)})
}, []);

const deleteUser =(id) => {
    axios.delete(`https://backend-hosting-s9r8.onrender.com/api/user/delete/${id}`)
    .then(result=>{
        console.log("user deleted");
    })

}
  return (
    <div>
        <h1>User</h1>
        <Link to="/create">Create User</Link>
        <table>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>address</th>
            </tr>
            {
                user.map((users) => (
           
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.address}</td>
                        <td>
                            <Link to={`/update/${users._id}`}>Update User</Link>
                            <button onClick={(e) => deleteUser(users._id)}>delete</button>
                        </td>
                    </tr>
                  

                    
                ))
            }
        </table>
    </div>
  )
}
export default User
