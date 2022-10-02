import { useTasks } from '../context/TasksContext'

export function TaskList() {
  const { tasks } = useTasks()

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  )
}
