import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task.task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default Tasks
