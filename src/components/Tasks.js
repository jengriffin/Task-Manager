import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  tasks.map((task) => console.log(task))
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default Tasks
