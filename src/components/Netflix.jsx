import React from 'react'
// import styles from './components/Netflix.module.css'
const Netflix = () => {

    const handleMouseEnter = (event) => {
        alert('hey i am a button')

  console.log(event)
  console.log(event.target)
  console.log(event.type)
  console.log(event.pageX)

    }

    const handleMouseLeave = () => {
        alert('mouse left')
    }

    const handleOnFocus = () => {
        alert('focused')
    }

    const handleClick = (name) => {
        console.log(`i am ${name}`)
    }
  return (
    <div className='btn'>
    {/* <button onClick={handleClick}> button</button> */}
    <button onClick={()=>handleMouseEnter(event)}> button</button>
<button onMouseLeave={() => handleMouseLeave()}>btn2 </button>
<button onFocus={handleOnFocus}>btn3</button>
<button onClick={()=>{handleClick("Yadav007")}}>btn4</button>
    </div>
  )
}

export default Netflix


const Event = ({handleMouseEnter}) => {

  function handleClick(){
    alert('hello')
  }

  return (
    <>
    <button handleMouseEnter={handleMouseEnter}>btn22</button>
    </>
  )
}