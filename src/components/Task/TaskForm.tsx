import { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

type TaskFormProps = {
  id: number
  task: string
  editTask: (id: number, taskValue: string) => void
  setIsEditOn: (isEdit: boolean) => void
}

export function TaskForm({ id, task, editTask, setIsEditOn }: TaskFormProps) {
  const [taskValue, setTaskValue] = useState<string>(task)

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()

        editTask(id, taskValue)
        setIsEditOn(false)
      }}
    >
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Edit task"
          aria-label="Edit task"
          aria-describedby="Edit selected task"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <Button type="submit">Go</Button>
      </InputGroup>
    </Form>
  )
}
