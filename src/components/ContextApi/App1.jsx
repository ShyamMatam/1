import React from 'react'
import { BioProvider } from './Index'
import Home from './Home'

const App = () => {
  return (
    <BioProvider><Home/></BioProvider>
  )
}

export default App
