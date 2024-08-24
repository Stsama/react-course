import React, {useState} from 'react'

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const  [newTask, setNewtask] = useState('');

  const handleInputChange = (e) => {
    setNewtask(e.target.value)
  }
  const addTask = () => {
      if(newTask.trim() !== ''){
        setTasks(t => [...t, newTask])
        setNewtask('')
      }
  }
  const removeTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index)
      setTasks(updatedTasks)
  }
  const moveTaskUp = (index) => {
    const updatedTasks = [...tasks]
    if(index > 0){
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }

  }
  const moveTaskDown = (index) => {
    const updatedTasks = [...tasks]
    if(index < tasks.length - 1){
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }


  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div className="">
        <input type="text" placeholder='Enter A new Task' value={newTask} onChange={handleInputChange} />
        <button className='add-button' onClick={addTask}>Add Task</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task} </span>
            <button className='delete-button' onClick={() => removeTask(index)}>Remove</button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>☝ </button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ToDoList