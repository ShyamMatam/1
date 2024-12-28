import React, { useReducer } from 'react'

const UseReducer = () => {
    // const[state,dispatch] = useReducer(reducer, initial);
    
    
const initialState = {count : 0,};
    const reducer = (state, action) => {
// if (action.type === "Increment") {
// return state + 1;
// } 

// if (action.type === "Decrement") {
//     return state - 1;
// }

// if (action.type === "Reset") {
//     return state = 0;
// }
switch (action.type) {
    case "Increment": 
    return {count : state.count + 1};
    
    case "Decrement": 
    return {count : state.count - 1};

    case "Reset": 
    return {count : 0};   

    default:
        break;
}
    }
    // const[count,dispatch] = useReducer(reducer, 0);
    const[state,dispatch] = useReducer(reducer, initialState);




  return (
    <div>
        <h1>{state.count}</h1>
      <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
      <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={() => dispatch({type:"Reset"})}>Reset</button>

    </div>
  )
}

export default UseReducer
