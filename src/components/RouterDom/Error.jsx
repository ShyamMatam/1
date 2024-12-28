import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  
const error = useRouteError()

    if(error.status === 404) {
        return <h1>error {error.status} not found</h1>
    }
  return (
    <div>
      page not found and {error.message}
    </div>
  )
}

export default Error
