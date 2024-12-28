import React, { useState } from 'react'

const RegistrationForm = () => {
    const[contacts, SetContacts] = useState({
        'userName':'',
        'mail':'',
        'password':'',
        'phone':''

    
    });
const handleInputChange = (e) => {
const {name, value} =e.target;
SetContacts((prev)=> {
})

}

  return (
    <div>
      <form action="">
        <label htmlFor="userName">userName</label>
        <input type="text" value={userName} onChange={conta}/>
      </form>
    </div>
  )
}

export default RegistrationForm
