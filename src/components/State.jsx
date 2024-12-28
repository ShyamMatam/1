import React, { useState } from 'react'

const State = () => {

    const [state, setState] =useState(0)
    // let value = 0;
    function handleClick() {
        // value ++;
        // console.log(value)
        setState(state + 1)
    }

    function handleClickDec(){
        setState(state -1)
        if (state === 0) return setState(state === 0 )
    }
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={handleClick}>increment</button>

      <button onClick={handleClickDec}>decrement</button>
    </div>
  )
}

export default State

