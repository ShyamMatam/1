import React, { useState } from 'react'

const LiftingStateUp = () => {

    const [Input, setInput] =useState('')
  return (
    <div>
      <OuterComponent Input={Input} setInput={setInput}/>
      <InnerComponent Input={Input}/>
    </div>
  )
}

export default LiftingStateUp

const OuterComponent = ({Input, setInput}) => {
    return (
        <>
        <input type="text" placeholder='enter text' value={Input} onChange={(event) => setInput(event.target.value)}></input>
        <h1>current input value is:{Input}</h1>
        
        </>
    )
}


const InnerComponent = ({Input}) => {
    return (
        <>
        <h1>current input value is:{Input}</h1>
        </>
    )
}