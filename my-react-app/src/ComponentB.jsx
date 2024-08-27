import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
    return (
        <div className='box'>
            <h1>ComponentB</h1>
            <h2> {`Hello ${props.user}`} </h2>
            <ComponentC />
        </div>
      )
}

export default ComponentB