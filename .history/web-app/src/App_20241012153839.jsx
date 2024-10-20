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

  function HandleSubmit(e) {
    e.preventDefault();
    props.add(student);

    setTask({
      task: ''
    });
  }

  return(
    <form onSubmit={HandleSubmit}>

    </form>
  )
}

export default App
