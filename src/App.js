import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'

// import { ThemeProvider, createTheme } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark'
//   }
// })
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(5),
      backgroundColor: '#3ef0b8',
      padding: theme.spacing(3)
    }
  },
  taskPaperParent: {
    borderRadius: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
    '&:hover': {
      background: '#8cb3c0',
      '& $task': {
        opacity: 0.25
      },
      '& $clearButton': {
        color: 'white',
        opacity: 1
      }
    }
  },
  task: {
    borderRadius: 50,
    gridArea: '1 / 1 / 2 / 2'
  },
  hoverButtonTray: {
    borderRadius: 50,
    height: '100%',
    gridArea: '1 / 1 / 2 / 2'
  },
  clearButton: {
    opacity: 0
  }
}))

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
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // const [colorChange, setColorChange] = useState([])

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
