
import React, { useState } from 'react'
import './style.css'


function Todolist() {
    const [todos,setTodos]=useState([]);
    const[inputValue,setInputValue]=useState('');
    const addtTodo=()=>{
        if(inputValue.trim()!='')
        {
            setTodos([...todos,inputValue]);
            setInputValue('')
        }
    }
    const deleteTodo=(index)=>{
        const newTodos=todos.filter((_,i)=>i!==index);
        setTodos(newTodos);
    }

  return (
   <div className='n1'>
  <h1>TO do List</h1>
  <input className='n2'type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
  placeholder='enter a task...'/>
  <button onClick={addtTodo}>Add</button>
  <ul>
    {todos.map((todos,index)=>(
        <li key={index}>{todos}
        <button className='p1' onClick={()=>deleteTodo(index)}>Delete</button>
        
        </li>
    ))}
  </ul>
   
   
   
   </div>
  )
}

export default Todolist