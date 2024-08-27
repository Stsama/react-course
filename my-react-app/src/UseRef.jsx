import React, {useEffect, useState, useRef} from 'react'

const UseRef = () => {
    const inputref = useRef(null);

    useEffect(() => {
        console.log(inputref);
    });

    const handleClick = () => {
        inputref.current.focus();
        inputref.current.style.backgroundColor = "yellow";
    }
  return (
    <div className="">
        <button onClick={handleClick} >
            click me!
        </button>
        <input ref={inputref} />
    </div>
  )
}

export default UseRef