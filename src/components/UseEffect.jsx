import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count, SetCount] = useState(0)
    const[name,SetName] = useState('')
    useEffect(()=>{
        console.log('count',count)
        
    },[count])
    useEffect(()=> {
        document.title =`count: ${count}`
    },[count])
    useEffect(()=> {
        console.log(name)
    },[name])
  return (
    <div>
      <h1>hello useEffect {count}</h1>
      <button onClick={()=> SetCount(count + 1)}>hello</button>
      <input type="text" value={name} onChange={(e)=>SetName(e.target.value)}/>
    </div>
  )
}

export default UseEffect
