const tasks=[
  {
    id:1,
    text: 'Water Plants',
    day: 'March 1st at 3:00',
    reminder: true,
  },
  {
    id:2,
    text: 'Fire Plants',
    day: 'March 31st at 3:00',
    reminder: true,
  },
  {
    id:3,
    text: 'Air Plants',
    day: 'June 31st at 3:00',
    reminder: false,
  }
]

const Tasks = () => {
  return (
    {tasks.map((task)=>(<h3>{task.text}</h3>))}
  )
}

export default Tasks