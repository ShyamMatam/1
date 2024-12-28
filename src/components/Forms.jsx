import React, { useState } from 'react'
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from 'react-icons/md';
const Forms = () => {
   const[inputValue, SetInputValue] = useState('');
//    const[task, SetTask] = useState([]);
const[task, SetTask] = useState(()=> {
    const rawTodo = localStorage.getItem('reactTodo')
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
}
)
   const[dateTime, SetDateTime] = useState('')
   const handleChange = (value) => {
    SetInputValue(value)
   }

   const handleSubmit = (e) => {
    e.preventDefault();
   
   if(!inputValue) return;
   if(task.includes(inputValue)) return;
   SetInputValue((prev) => [...prev, inputValue]);

   SetTask((prev) => [...prev, inputValue]);

   SetInputValue("")
   }

const interval = () => {
    const date = new Date();
   const formattedDate = date.toLocaleDateString();
   const formattedTime = date.toLocaleTimeString();
   SetDateTime(`${formattedDate}-${formattedTime}`)
}
  
setInterval(() => {
    interval()
},1000)

// delete
const handleDelete = (value,item) => {
    const updatedTask = task.filter((item) => item!== value);
    SetTask(updatedTask)
    console.log(value)
    console.log(item)
}

const handleClear = () => {
    SetTask([]);
}

// local storage

localStorage.setItem("reactTodo",JSON.stringify(task));
// localStorage.getItem("reactTodo",JSON.stringify(task));

   return (
    <div className='form'>

        <h1>{dateTime}</h1>
        <form action="" onSubmit={handleSubmit}>
      <input type="text" autoComplete='off' value={inputValue} onChange={(e) => handleChange(e.target.value)} />
      <button type='submit'>Add Task</button>
      </form>
      <section>
        <ul>
        {task.map((item) =><li key={item}> <span>{item}</span> <button><MdCheck /></button> <button className='del' onClick={()=>handleDelete(item)}><MdDeleteForever /></button></li>)}
        </ul>
      </section>
      <button onClick={handleClear} style={{color:"red"}}>clearAll</button>
    </div>
  )
}

export default Forms
