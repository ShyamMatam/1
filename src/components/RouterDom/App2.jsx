import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import AppLayout from './AppLayout'
const App2 = () => {
//    const router =  createBrowserRouter([
//     {
//         path : '/',
//         element : <Home/>
//     },
//     {
//         path : '/about',
//         element : <About/>
//     },
//     {
//         path : '/contact',
//         element : <Contact/>
//     }
//    ])


//    const router =  createBrowserRouter(
//     createRoutesFromElements(
//         <Route>
//             <Route path='/' element = {<Home/>}/>
//             <Route path='about' element = {<About/>} />
//             <Route path="contact" element = {<Contact/>}/>

//         </Route>
//     )
//    )


const router = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                        path : '/',
                        element : <Home/>
                    },
                    {
                        path : '/about',
                        element : <About/>
                    },
                    {
                        path : '/contact',
                        element : <Contact/>
                    }
        ]
    }
])
  return <RouterProvider router={router} />
}

export default App2
