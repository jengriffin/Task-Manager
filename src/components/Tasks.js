// const tasks = [

// ]

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
