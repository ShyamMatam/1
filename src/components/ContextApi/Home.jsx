import React, { useContext } from 'react'
import { BioContext } from './Index'

const Home = () => {

    const myName = useContext(BioContext)
  return (
    <div>
      <h1>hello  i am {myName}</h1>
    </div>
  )
}

export default Home
