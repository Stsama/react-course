import React, {useEffect, useState} from 'react'

const UseEff = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleReseize);
        console.log('useEffect');

        return () => {
            window.removeEventListener('resize', handleReseize);
        }
    }, []);
    
    const handleReseize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
    <>
    <p>Window width: {width}px </p>
    <p>Window height: {height}px </p>
    </>
  )
}

export default UseEff