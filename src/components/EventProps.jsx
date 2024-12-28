import React from 'react'

 const EventProps = () => {

    const handleWelcomeUser = (user) => {
alert(`hello ${user}`)
    };
    const handleHover = () => {
        alert('hovered');
    };

  return (
    <div>
      <WelcomeUser onclick={()=> handleWelcomeUser('shyam')}
      onMouseEnter={handleHover} />
    </div>
  )
}


export default EventProps;

const WelcomeUser = (props) => {

    function handleGreeting(){
        alert('hello user');
        props.onClick;
    };

    return (
        <>
        <button onClick={props.onClick}>click me</button>
<button onMouseEnter={props.onMouseEnter}>Hoverme</button>
<button onClick={handleGreeting}>Greeting</button>
        </>
    )
}

