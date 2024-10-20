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
  const taskListUI = tasks.map((task, index) => (
    <p key={index}>{task.task}</p>
  ))

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
      <input
        type='text' value={task.task}
        onChange={(e) => setTask({...task, task: e.target.value})}
      />
      <button>Save</button>
    </form>
  )
}

export default App
