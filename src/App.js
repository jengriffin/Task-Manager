import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import AddTask from './components/AddTask'

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
  const addTask = (task) => {
    console.log(task)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="App">
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline /> */}
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'Chill Time!'
      )}
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App
