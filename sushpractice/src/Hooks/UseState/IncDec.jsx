import React from 'react'
import { useState } from "react";

const IncDec = () => {
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }
    
    const DecNum = () => {
        setCount(count - 1);
    }
  return (
    <>
        <h1>{ count }</h1>
      <button onClick={IncNum}>Increase..!</button>
      <button onClick={DecNum}>Decrease..!</button>
    </>
  )
}

export default IncDec
