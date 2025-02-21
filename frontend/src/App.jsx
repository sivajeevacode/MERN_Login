import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/login",{email,password})
    .then((user)=>{
      alert(user.data)
      setEmail("");
      setPassword("");
    }).catch((err)=>{
      console.log("error founded ",err);
    })
  }
 

  return (
    <div>
      <form onSubmit={submit}>
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
