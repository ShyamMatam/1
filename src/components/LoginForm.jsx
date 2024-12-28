import React, { useState } from 'react'

const LoginForm = () => {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('');
    const[message, SetMessage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            userName,
            password
        }
        console.log(loginData);
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userName">userName</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} name="userName"/>
        <label htmlFor="password">password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  name='password'/>
        <label htmlFor="message">message</label>
        <textarea name="message" type="password" value={message} onChange={(e)=>SetMessage(e.target.value)} id="1" />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm
