import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import BASE_URL from './globals'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)
  const [tasks, setTasks] = useState([])
  let { id } = useParams()
  function getCookie(name) {
    let cookieValue = null

    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()

        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))

          break
        }
      }
    }

    return cookieValue
  }
  const csrftoken = getCookie('csrftoken')
  useEffect(() => {
    const getTasks = async () => {
      try {
        let res = await axios.get(`http://127.0.0.1:8000/task`, {
          credentials: 'include'
        })
        setTasks(res.data)
      } catch (err) {}
    }
    getTasks()
    getCookie('csrftoken')
  }, [])

  console.log(csrftoken)

  const deleteTask = async (id) => {
    const res = await axios.delete(`http://127.0.0.1:8000/task/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  const addTask = (task) => {
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  const onAdd = () => {
    setShowAddTask(!showAddTask)
  }
  const editTask = (id) => {
    setShowEditTask(!showEditTask)
  }
  return (
    <div className="App">
      <Header onAdd={onAdd} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onEdit={editTask}
          showEditTask={showEditTask}
        />
      ) : (
        <img
          src="https://media.giphy.com/media/FRGzlnvEMuvOo/giphy.gif"
          className="chill"
        />
      )}
      {/* {setShowEditTask && <EditTask onEdit={showEdit} />} */}
    </div>
  )
}

export default App
