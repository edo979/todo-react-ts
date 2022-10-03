import { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  ListGroup,
} from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'

type TaskProps = {
  id: number
  task: string
}

export function Task({ id, task }: TaskProps) {
  const [isEditOn, setIsEditOn] = useState<boolean>(false)
  const { finishedTask, removeTask } = useTasks()

  return (
    <ListGroup.Item
      action
      as="li"
      className="d-flex justify-content-between align-items-baseline gap-4"
      key={id}
    >
      <div className="w-100">
        {isEditOn ? (
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Edit task"
              aria-label="Edit task"
              aria-describedby="Edit selected task"
            />
            <Button onClick={() => setIsEditOn(false)}>Go</Button>
          </InputGroup>
        ) : (
          <span>{task}</span>
        )}
      </div>

      <ButtonGroup aria-label="Edis task">
        <Button
          variant="outline-success"
          size="sm"
          onClick={() => finishedTask(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
        </Button>
        <Button
          variant="outline-warning"
          size="sm"
          onClick={() => setIsEditOn(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeTask(id)}
        >
          &times;
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  )
}