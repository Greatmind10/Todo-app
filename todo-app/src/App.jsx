import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
function App() {
const [task,setTasks]= useState([])
  const addTask = (task) => {
    setTasks(previousState => [...previousState,task]
      
    )

    
  }
  return (
    <>
      <div className='container'>
        <header>
          <h1>My Task List</h1>
        </header>

        <CustomForm addTasK={addTask}/>
        {task && <TaskList task={task}/>}
        </div>
    </>
  )
}

export default App
