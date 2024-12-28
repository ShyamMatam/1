import React, { useEffect } from 'react'
import axios from 'axios'
const Axios = () => {
const api = 'https://fakestoreapi.com/products'
    const getMovie = async () => {
    
    try {
           const res =  await axios.get(api)
       console.log(res.data.title)
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(() => {
        getMovie()
    },[])

  return (
    <div>
      <h1>movies</h1>
    </div>
  )
}

export default Axios
