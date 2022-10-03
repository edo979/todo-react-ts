import { ListGroup } from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'
import { Task } from './Task'

type TaskListProps = {
  filterTasks: string
}

export function TaskList({ filterTasks }: TaskListProps) {
  const { tasks, getTasksFilter } = useTasks()
  const filteredTasks = tasks.filter(getTasksFilter(filterTasks))

  return (
    <>
      {filteredTasks.length > 0 && (
        <ListGroup as="ul">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ListGroup>
      )}
    </>
  )
}
