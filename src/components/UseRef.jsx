import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const username =  useRef(null);
    const password = useRef(null);

    const handleSubmit = (event) => {
event.preventDefault();
console.log(username.current.value, password.current.value);
console.log(username.current, password.current);

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
    <input type="text" id='username' ref={username} />
    <br />
    <input type="password" id='password' ref={password} />
    <br />
    <button type="submit" >submit</button>
    </form>
    </div>
  )
}

export default UseRef
