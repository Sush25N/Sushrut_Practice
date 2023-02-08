import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        console.log("Add event listener");
        window.addEventListener("resize",actualWidth);
        return () => {
            console.log("Remove event listener");
            window.removeEventListener("resize", actualWidth);
        }
    });
  return (
    <>
      <p>The actual size of the window is:</p>
      <h1>{widthCount}</h1>
    </>
  )
}

export default UseEffect2
