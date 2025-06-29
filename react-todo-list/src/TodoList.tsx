import React, { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState(["🥐 Desayunar", "🛀 Ducharse", "🐶 Pasear al perro"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }
  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index - 1]] = 
      [updatedTasks[index - 1],updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }
  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] = 
      [updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks)
    }
    
  }
  return (<div className="to-do-list">
    <h1>To-Do-List</h1>

    <div className='todo-list-header'>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}/>

      <button
        className="add-button"
        onClick={addTask}>
        Add task
      </button>
    </div>

    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className="text">{task}</span>
          <button
            className="delete-button"
            onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button
            className="move-button"
            onClick={() => moveTaskUp(index)}>
            👍 Move Up
          </button>
          <button
            className="move-button"
            onClick={() => moveTaskDown(index)}>
            👎 Move Down
          </button>
        </li>
      ))}
    </ol>
  </div>)
}
export default TodoList
