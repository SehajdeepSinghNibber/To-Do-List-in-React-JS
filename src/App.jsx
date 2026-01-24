import React from 'react'
import { useState } from 'react'
import './app.css'

const App = () => {

  const [todo,setTodo]=useState([])
  const [input,setInput]=useState("")

  const addTodo =()=>{
    if (input.trim()!==""){
      setTodo([...todo,input])
      setInput('')
    }
    else{
      alert("Todo can't be empty")
    }
  }

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    addTodo()
    }
  }

  // const deleteTodo=(index)=>{
  //   setTodo(todo.filter((_, i) => i !== index))
  // }

  const deleteTodo=(index)=>{
    const newTodos=todo.filter((item,i)=>i !== index)
    setTodo(newTodos)
  }

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="todo-input"
        />

        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todo.map((item, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{item}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App