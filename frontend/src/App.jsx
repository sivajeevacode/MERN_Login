import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [show,setShow] = useState(true);
  const [data,setData] = useState([]);
  const [box,setBox] =useState(false);

  const submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/login",{email,password})
    .then((user)=>{
      setShow(false)
      setBox(true)
      setData(user.data)
     
    }).catch((err)=>{
      console.log("error founded ",err);
    })
  }
 

  return (
    <div>
      <p className={box?"visit":""}>{data}</p>
      
      <form onSubmit={submit} className={show?"":"hidden"}>
        <h2>Log-In</h2>
        <div className="input-group">
          <h4>Email</h4>
          <input type="email" required placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <h4>Password</h4>
          <input type="password" required placeholder='Enter your password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button>Log in</button>

      </form>
    </div>
  )
}

export default App
