import { Todo } from '../hooks/useTasks'
type TaskListProps = {
  tasks: Todo[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.todo}</li>
      ))}
    </ul>
  )
}
