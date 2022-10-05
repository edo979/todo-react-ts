import { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useTasks } from '../../context/TasksContext'
import { ControlButton } from './ControlButton'
import { TaskForm } from './TaskForm'

type TaskProps = {
  id: number
  task: string
  isDone: boolean
}

export function Task({ id, task, isDone }: TaskProps) {
  const [isEditOn, setIsEditOn] = useState<boolean>(false)
  const { finishedTask, removeTask, editTask } = useTasks()

  return (
    <ListGroup.Item
      action
      variant={isDone ? 'success' : undefined}
      as="li"
      className="d-flex justify-content-between align-items-baseline gap-3"
      key={id}
    >
      <div className="w-100">
        {isEditOn ? (
          <TaskForm
            id={id}
            task={task}
            editTask={editTask}
            setIsEditOn={setIsEditOn}
          />
        ) : (
          <span>{task}</span>
        )}
      </div>

      {!isEditOn && (
        <ControlButton
          id={id}
          isDone={isDone}
          finishedTask={finishedTask}
          removeTask={removeTask}
          setIsEditOn={setIsEditOn}
        />
      )}
    </ListGroup.Item>
  )
}
