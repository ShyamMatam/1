import React from 'react'
import Header from './Header'
Footer
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'

const AppLayout = () => {
    const navigation = useNavigation()

    if(navigation.state === 'loading') return <h1>loading...</h1>
  return (
    <div>
      <Header/>
      <Outlet/> 
      <Footer/>
    </div>
  )
}

export default AppLayout
