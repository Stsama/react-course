import React, {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState("")
    const changName = (e) => {
        setName(e.target.value)
    }


  return (
    <div>
        <h1>My Component</h1>
        <input type="text" value={name} onChange={changName} />
        <h2>{name}</h2>
    </div>
  )
}

export default MyComponent