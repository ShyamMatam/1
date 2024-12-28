import React from 'react'

const PropDrilling = () => {
  return (
    <div>
        <h1>a</h1>
      <Parent data="I love ReactJS"/>
    </div>
  )
}

export default PropDrilling
  

const Parent = ({data}) => {
    return (
        <div>
            <h1>b</h1>
<Child data={data} />
        </div>
    )
}


const Child = ({data}) => {
    return (
        <div>
            <h1>c</h1>
<GrandChild data={data}/>
        </div>
    )
}


const GrandChild = ({data}) => {
    return (
        <div>
            <h1>d</h1>
<h1>hello {data}</h1>
        </div>
    )
}