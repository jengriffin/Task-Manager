import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Water Plants',
      day: 'March 1st at 3:00',
      reminder: true
    },
    {
      id: 2,
      text: 'Fire Plants',
      day: 'March 31st at 3:00',
      reminder: true
    },
    {
      id: 3,
      text: 'Air Plants',
      day: 'June 31st at 3:00',
      reminder: false
    }
  ])
  const deleteTask = (id) => {
    console.log('yeet', id)
  }
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
