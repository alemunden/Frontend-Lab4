import { useState } from 'react'
import './App.css'

const initialTasks = [
  {
    task: 'Task 1'
  },
  {
    task: 'Task 2'
  },
  {
    task: 'Task 3'
  }
]

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      
    </>
  )
}

function TaskForm() {
  const [task, setTask] = useState({
    task: ''
  });

  return(

  )
}

export default App
