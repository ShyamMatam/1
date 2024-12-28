import React, { useEffect, useState } from 'react'

const HowToNotFetch = () => {
    const[apiData, SetApiData] = useState(null)
    const[loading, SetLoading] = useState(true)
    const[error, SetError] = useState('')
// fetch
    // useEffect(() => {
    //     // fetch('https://fakestoreapi.com/products')
    //     fetch('https://fakestoreapi.com/users')

    //     .then((res) => res.json())
    //     .then((data) => {
    //         SetApiData(data)
    //         SetLoading(false)})
    //     .catch((error) => { console.log(error) ;
    //                        SetError(error)
    //     })
    // },[])

    // async-await 

    const API = 'https://fakestoreapi.com/users';
    const apiAsyncFetch = async () => {
        try {
            const res =  await fetch(API)
            const data = await res.json();
            SetApiData(data)
            SetLoading(false)
        } catch (error) {
            console.log(error)
            SetError(error)
        }
     
    }

    useEffect(() => {
        apiAsyncFetch();
    },[])
   console.log(apiData)
   if(loading) return <h1>...Loading</h1>
   if(error) return <h1>{error.message}</h1>
  return (
    <div>
        {/* products/1 */}
      {/* <h1>data: {apiData.title}</h1>
      <h2>desscription: {apiData.description}</h2>
      <h2>category: {apiData.category}</h2>
      <div>
        <img src={apiData.image} alt="" height={80} width= {60}/>
      </div>

      <h2>price: {apiData.price}</h2>
      <h2>Rating: {apiData.rating.rate}</h2>
      <h2>count: {apiData.rating.count}</h2> */}
      {/* <img src={apiData.species.url} alt="pikachu" /> */}
      {/* products */}
      {/* <ul>{
        apiData.map((curData)=> {
       return <li key={curData.id}>
        <h1>data: {curData.title}</h1>
      <h2>desscription: {curData.description}</h2>
      <h2>category: {curData.category}</h2>
      <div>
        <img src={curData.image} alt="" height={80} width= {60}/>
      </div>

      <h2>price: {curData.price}</h2>
      <h2>Rating: {curData.rating.rate}</h2>
      <h2>count: {curData.rating.count}</h2>
       </li>
        }
        )
    }
      </ul> */}
      {/* <h1>{apiData.forms}</h1> */}
      {/* users/1 */}
      {/* <h2 style={{color:"lightpink"}}>name:{apiData.name.firstname}</h2>
      <h2 style={{color:"lightseagreen"}}>password:{apiData.password}</h2>
      <h2>phone:{apiData.phone}</h2>
      <h2>username:{apiData.username}</h2> */}
      {/* users */}
      <ul>
        {
            apiData.map((curData) => {
                return <li key={curData.id}>
                    
                        <h2 style={{color:"lightpink"}}>name:{curData.name.firstname}</h2>
                        <h2 style={{color:"lightseagreen"}}>password:{curData.password}</h2>
                        <h2>phone:{curData.phone}</h2>
                        <h2>username:{curData.username}</h2>
                    
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default HowToNotFetch
